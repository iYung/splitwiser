import { CHANGE_TAB } from "../actionTypes";

const initialState = {
  tab: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB: {
      return {
        tab: action.payload.tab,
      };
    }
    default:
      return state;
  }
}
