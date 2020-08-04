import React, { useState } from "react";

import { Container, Header, Content, Picker, Form, Icon } from "native-base";

import { useSelector, useDispatch } from "react-redux";
import Dialog from "react-native-dialog";

import { setNewExpenseModal } from "../redux/actions";

export default function NewExpenseModal() {
  const newExpenseModalState = useSelector((state) => state.newExpenseModal);
  const previousEntryState = useSelector((state) => state.previousEntry);
  const dispatch = useDispatch();

  const date = new Date();

  const [payer, setPayer] = useState(previousEntryState.payer == "ivan");
  const [split, setSplit] = useState(previousEntryState.split);

  const updateNumber = (input, update) => {
    if(input.length > 0 && !isNaN(input)) {
      console.log(input)
      update(parseFloat(input))
    }
  }

  return (
    <Dialog.Container visible={newExpenseModalState.open}>
      <Dialog.Title>Add a new expense</Dialog.Title>
      <Dialog.Input keyboardType="numbers-and-punctuation" label="Name" style={{ borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5 }} />
      <Dialog.Input keyboardType="decimal-pad" label="Cost" style={{ borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5 }} value={split.toString()} />
      <Dialog.Input keyboardType="decimal-pad" label="% for Ivan" style={{ borderColor: '#d3d3d3', borderWidth: 1, borderRadius: 5 }} defaultValue={split.toString()} onChangeText={(value) => updateNumber(value, setSplit)}/>
      <Dialog.Switch label="Ivan paid" value={payer} onChange={() => setPayer(!payer)}/>
      <Dialog.Switch label="Amanda paid" value={!payer} onChange={() => setPayer(!payer)}/>
      <Dialog.Button
        label="Cancel"
        onPress={() => dispatch(setNewExpenseModal(false))}
      />
      <Dialog.Button
        label="Confirm"
        onPress={() => dispatch(setNewExpenseModal(false))}
      />
    </Dialog.Container>
  );
}
