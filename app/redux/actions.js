import {
  CHANGE_TAB,
  SET_NEW_EXPENSE_MODAL,
  SET_NEW_RECURRING_EXPENSE_MODAL,
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
