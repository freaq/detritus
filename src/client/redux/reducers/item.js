import {
  SET_ITEM
} from "../actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ITEM: {
      return {
        ...action.payload.item
      }
    }
    default:
      return state;
  }
}
