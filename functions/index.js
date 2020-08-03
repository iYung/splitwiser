const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /expenses/:documentId/original
exports.addExpense = functions.https.onRequest(async (req, res) => {
    // Grab the params
    const epoch = req.body.epoch;
    const name = req.body.name;
    const split = req.body.split;
    const cost = req.body.cost;
    const payer = req.body.payer;
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('expenses').add({
        epoch: epoch,
        name: name,
        split: split,
        cost: cost,
        payer: payer
    });
    // Send back a message that we've succesfully written the message
    res.json({result: `Expense with ID: ${writeResult.id} added.`});
});


exports.addRecurringExpense = functions.https.onRequest(async (req, res) => {
    // Grab the params
    const epoch = req.body.epoch;
    const name = req.body.name;
    const split = req.body.split;
    const cost = req.body.cost;
    const payer = req.body.payer;
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('recurring').add({
        epoch: epoch,
        name: name,
        split: split,
        cost: cost,
        payer: payer
    });
    // Send back a message that we've succesfully written the message
    res.json({result: `Recurring expense with ID: ${writeResult.id} added.`});
});

exports.deleteExpense = functions.https.onRequest(async (req, res) => {
    // Grab the params
    const id = req.body.id;

    admin.firestore().collection('expenses').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        res.json({result: `Deleted expense with ID: ${id}.`});
    }).catch(function(error) {
        console.error("Error deleting document: ", error);
        res.json({result: `Failed to delete expense with ID: ${id}.`});
    });
});

exports.deleteRecurringExpense = functions.https.onRequest(async (req, res) => {
    // Grab the params
    const id = req.body.id;

    admin.firestore().collection('recurring').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        res.json({result: `Deleted recurring expense with ID: ${id}.`});
    }).catch(function(error) {
        console.error("Error deleting document: ", error);
        res.json({result: `Failed to delete recurring expense with ID: ${id}.`});
    });
});

exports.onExpenseCreate = functions.firestore.document('/expenses/{documentId}')
.onCreate((snap, context) => {
  // Grab the current value of what was written to Cloud Firestore.
  const snapData = snap.data();
  const split = snapData.split;
  const cost = snapData.cost;
  const payer = snapData.payer;

  const ivanPercent = split / 100;
  const amandaPercent = 1 - ivanPercent

  const totalDocRef = admin.firestore().collection('total').doc('total')

  return totalDocRef.get().then((doc) => {
    var currentTotal = doc.data().total;
    if (payer == person.IVAN) {
      currentTotal = currentTotal + cost * amandaPercent
    }
    
    if (payer == person.AMANDA) {
      currentAmount = currentTotal - cost * ivanPercent
    }
    return totalDocRef.set({ total: parseFloat(currentTotal.toFixed(2)) })
  })
});

exports.onExpenseDelete = functions.firestore.document('/expenses/{documentId}')
.onDelete((snap, context) => {
  // Grab the current value of what was written to Cloud Firestore.
  const snapData = snap.data();
  const split = snapData.split;
  const cost = snapData.cost;
  const payer = snapData.payer;

  const ivanPercent = split / 100;
  const amandaPercent = 1 - ivanPercent

  const totalDocRef = admin.firestore().collection('total').doc('total')

  return totalDocRef.get().then((doc) => {
    var currentTotal = doc.data().total;
    if (payer == person.IVAN) {
      currentTotal = currentTotal - cost * amandaPercent
    }
    
    if (payer == person.AMANDA) {
      currentAmount = currentTotal + cost * ivanPercent
    }
    return totalDocRef.set({ total: parseFloat(currentTotal.toFixed(2)) })
  })
});

exports.getExpenses = functions.https.onRequest(async (req, res) => {
    // Grab the params
    const lowerEpoch = req.body.lowerEpoch;
    const higherEpoch = req.body.higherEpoch;

    const expensesRef = admin.firestore().collection('expenses')

    var expenses = [];

    expensesRef.where("epoch", "<", higherEpoch).where("epoch", ">", lowerEpoch).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const expenseData = doc.data()
            expenses.push(
                {
                    name: expenseData.name,
                    payer: expenseData.payer,
                    split: expenseData.split,
                    cost: expenseData.cost,
                    epoch: expenseData.epoch,
                    id: doc.id
                }
            )
        });
        // Send back a message that we've succesfully written the message
        res.json({result: expenses});
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});

exports.getRecurringExpenses = functions.https.onRequest(async (req, res) => {

    const expensesRef = admin.firestore().collection('recurring')

    var expenses = [];

    expensesRef.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            const expenseData = doc.data()
            expenses.push(
                {
                    name: expenseData.name,
                    payer: expenseData.payer,
                    split: expenseData.split,
                    cost: expenseData.cost,
                    id: doc.id
                }
            )
        });
        // Send back a message that we've succesfully written the message
        res.json({result: expenses});
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});

exports.getTotal = functions.https.onRequest(async (req, res) => {
    const totalDocRef = admin.firestore().collection('total').doc('total')
    return totalDocRef.get().then((doc) => {
        res.json({result: doc.data().total});
    });
});

exports.scheduledFunctionCrontab = functions.pubsub.schedule('0 8 1 * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {

    const expensesRef = admin.firestore().collection('recurring')

    expensesRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        const expenseData = doc.data()

        admin.firestore().collection('expenses').add({
            epoch: Date.parse(context.timestamp),
            name: expenseData.name,
            split: expenseData.split,
            cost: expenseData.cost,
            payer: expenseData.payer
        });

        console.log(`Created expense for: ${doc.id}`);
      });
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  return null;
});

const person = {
    IVAN: 'ivan',
    AMANDA: 'amanda'
}