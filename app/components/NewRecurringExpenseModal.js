import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Dialog from "react-native-dialog";

import { setNewRecurringExpenseModal } from "../redux/actions";

export default function NewRecurringExpenseModal() {
  const newRecurringExpenseModalState = useSelector(
    (state) => state.newRecurringExpenseModal
  );
  const dispatch = useDispatch();

  return (
    <Dialog.Container visible={newRecurringExpenseModalState.open}>
      <Dialog.Title>Add a new recurring expense</Dialog.Title>
      <Dialog.Description>
        Do you want to delete this account? You cannot undo this action.
      </Dialog.Description>
      <Dialog.Input keyboardType="numeric" label="Cost" />
      <Dialog.Button
        label="Cancel"
        onPress={() => dispatch(setNewRecurringExpenseModal(false))}
      />
    </Dialog.Container>
  );
}
