import { SET_PREVIOUS_ENTRY } from "../actionTypes";

const initialState = {
  split: 50,
  payer: "ivan",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PREVIOUS_ENTRY: {
      return {
        split: action.payload.split,
        payer: action.payload.payer,
      };
    }
    default:
      return state;
  }
}
