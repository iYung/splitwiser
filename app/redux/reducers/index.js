import { combineReducers } from "redux";
import tabs from "./tabs";
import newExpenseModal from "./newExpenseModal";
import newRecurringExpenseModal from "./newRecurringExpenseModal";
import deleteModal from "./deleteModal";
import previousEntry from "./previousEntry";
import total from "./total";

export default combineReducers({
  tabs,
  newExpenseModal,
  newRecurringExpenseModal,
  deleteModal,
  previousEntry,
  total,
});
