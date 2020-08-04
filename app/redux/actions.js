import {
  CHANGE_TAB,
  SET_NEW_EXPENSE_MODAL,
  SET_NEW_RECURRING_EXPENSE_MODAL,
  SET_DELETE_MODAL,
  SET_PREVIOUS_ENTRY,
} from "./actionTypes";

import { AsyncStorage } from "react-native";

async function _storeData(payer, split) {
  await AsyncStorage.setItem("payer", payer ? "ivan" : "amanda");

  await AsyncStorage.setItem("split", split.toString());
}

async function _fetchData() {
  var payer = await AsyncStorage.getItem("payer");
  payer = payer ? payer : "ivan";
  var split = await AsyncStorage.getItem("split");
  split = split ? split : "50";
  return { payer, split };
}

export const changeTab = (tab) => ({
  type: CHANGE_TAB,
  payload: {
    tab: tab,
  },
});

export const setNewExpenseModal = (open) => ({
  type: SET_NEW_EXPENSE_MODAL,
  payload: {
    open: open,
  },
});

export const setNewRecurringExpenseModal = (open) => ({
  type: SET_NEW_RECURRING_EXPENSE_MODAL,
  payload: {
    open: open,
  },
});

export const setDeleteModal = (open, id, name) => ({
  type: SET_DELETE_MODAL,
  payload: {
    open: open,
    id: id,
    name: name,
  },
});

export const setPreviousEntry = (split, payer) => ({
  type: SET_PREVIOUS_ENTRY,
  payload: {
    split: split,
    payer: payer,
  },
});

export function updatePreviousEntry(payer, split) {
  return function (dispatch) {
    return _storeData(payer, split).then(() =>
      dispatch(setPreviousEntry(payer, split))
    );
  };
}

export function getPreviousEntry() {
  return function (dispatch) {
    return _fetchData().then((payer, split) =>
      dispatch(setPreviousEntry(payer == "ivan", parseFloat(split)))
    );
  };
}
