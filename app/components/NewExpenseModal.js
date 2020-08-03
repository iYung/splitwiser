import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Dialog from "react-native-dialog";

import { setNewExpenseModal } from "../redux/actions";

export default function NewExpenseModal() {
  const newExpenseModalState = useSelector((state) => state.newExpenseModal);
  const dispatch = useDispatch();

  return (
    <Dialog.Container visible={newExpenseModalState.open}>
      <Dialog.Title>Add a new expense</Dialog.Title>
      <Dialog.Description>
        Do you want to delete this account? You cannot undo this action.
      </Dialog.Description>
      <Dialog.Input keyboardType="numeric" label="Cost" />
      <Dialog.Button
        label="Cancel"
        onPress={() => dispatch(setNewExpenseModal(false))}
      />
    </Dialog.Container>
  );
}
