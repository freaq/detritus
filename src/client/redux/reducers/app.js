import { SET_APP } from "../actionTypes";

const initialState = {    
}  

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_APP: {      
      return {
        ...state,
        ...action.payload.app
      };
    }
    default:
      return state;
  }
}
