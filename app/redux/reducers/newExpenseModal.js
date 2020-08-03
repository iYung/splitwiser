import { SET_NEW_EXPENSE_MODAL } from "../actionTypes";

const initialState = {
  open: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NEW_EXPENSE_MODAL: {
      return {
        open: action.payload.open,
      };
    }
    default:
      return state;
  }
}
