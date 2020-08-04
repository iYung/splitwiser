import { SET_DELETE_MODAL } from "../actionTypes";

const initialState = {
  open: false,
  id: null,
  name: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DELETE_MODAL: {
      return {
        open: action.payload.open,
        id: action.payload.id,
        name: action.payload.name,
      };
    }
    default:
      return state;
  }
}
