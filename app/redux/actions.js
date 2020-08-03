import { CHANGE_TAB } from "./actionTypes";

export const changeTab = (tab) => ({
  type: CHANGE_TAB,
  payload: {
    tab: tab,
  },
});
