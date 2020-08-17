import { CHANGE_TOTAL } from "../actionTypes";

const initialState = {
  total: 10,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOTAL: {
      return {
        total: action.payload.total,
      };
    }
    default:
      return state;
  }
}
