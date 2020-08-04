import {
  CHANGE_TAB,
  SET_NEW_EXPENSE_MODAL,
  SET_NEW_RECURRING_EXPENSE_MODAL,
  SET_DELETE_MODAL,
  SET_PREVIOUS_ENTRY
} from "./actionTypes";

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
    name: name
  },
});

export const setPreviousEntry = (split, payer) => ({
  type: SET_PREVIOUS_ENTRY,
  payload: {
    split: split,
    payer: payer
  },
});