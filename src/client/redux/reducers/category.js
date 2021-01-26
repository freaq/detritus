import {
  SET_CATEGORY
} from "../actionTypes";

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state,
        ...action.payload.category
      };
    }
    default:
      return state;
  }
}
