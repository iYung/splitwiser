import { combineReducers } from "redux";
import tabs from "./tabs";
import newExpenseModal from "./newExpenseModal";
import newRecurringExpenseModal from "./newRecurringExpenseModal";

export default combineReducers({
  tabs,
  newExpenseModal,
  newRecurringExpenseModal,
});
