import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Dialog from "react-native-dialog";

import { setNewRecurringExpenseModal } from "../redux/actions";

export default function NewRecurringExpenseModal() {
  const newRecurringExpenseModalState = useSelector(
    (state) => state.newRecurringExpenseModal
  );
  const previousEntryState = useSelector((state) => state.previousEntry);
  const dispatch = useDispatch();

  const date = new Date();

  const [payer, setPayer] = useState(previousEntryState.payer == "ivan");
  const [split, setSplit] = useState(previousEntryState.split);
  const [cost, setCost] = useState(0);
  const [name, setName] = useState("");

  const updateNumber = (input, update) => {
    if (input.length > 0 && !isNaN(input)) {
      update(parseFloat(input));
    }
  };

  return (
    <Dialog.Container visible={newRecurringExpenseModalState.open}>
      <Dialog.Title>Add a new recurring expense</Dialog.Title>
      <Dialog.Input
        keyboardType="numbers-and-punctuation"
        label="Name"
        style={{ borderColor: "#d3d3d3", borderWidth: 1, borderRadius: 5 }}
        onChangeText={(value) => setName(value)}
      />
      <Dialog.Input
        keyboardType="decimal-pad"
        label="$ Cost"
        style={{ borderColor: "#d3d3d3", borderWidth: 1, borderRadius: 5 }}
        defaultValue={cost.toString()}
        onChangeText={(value) => updateNumber(value, setCost)}
      />
      <Dialog.Input
        keyboardType="decimal-pad"
        label="% for Ivan"
        style={{ borderColor: "#d3d3d3", borderWidth: 1, borderRadius: 5 }}
        defaultValue={split.toString()}
        onChangeText={(value) => updateNumber(value, setSplit)}
      />
      <Dialog.Switch
        label="Ivan paid"
        value={payer}
        onChange={() => setPayer(!payer)}
      />
      <Dialog.Switch
        label="Amanda paid"
        value={!payer}
        onChange={() => setPayer(!payer)}
      />
      {cost > 0 && name != "" && split > 0 && (
        <Dialog.Button
          label="Confirm"
          onPress={() => dispatch(setNewRecurringExpenseModal(false))}
        />
      )}
      <Dialog.Button
        label="Cancel"
        onPress={() => {
          setCost(0);
          setName("");
          dispatch(setNewRecurringExpenseModal(false));
        }}
      />
    </Dialog.Container>
  );
}
