import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Dialog from "react-native-dialog";

import { setDeleteModal } from "../redux/actions";

export default function DeleteModal() {
  const deleteModalState = useSelector((state) => state.deleteModal);
  const dispatch = useDispatch();

  return (
    <Dialog.Container visible={deleteModalState.open}>
      <Dialog.Title>Delete expense "{deleteModalState.name}"</Dialog.Title>
      <Dialog.Description>
        Do you want to delete this expense? You cannot undo this action.
      </Dialog.Description>
      <Dialog.Button
        label="Cancel"
        onPress={() => dispatch(setDeleteModal(false, null, null))}
      />
      <Dialog.Button
        label="Confirm"
        onPress={() => dispatch(setDeleteModal(false, null, null))}
      />
    </Dialog.Container>
  );
}
