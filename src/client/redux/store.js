import { createStore } from "redux";
import rootReducer from "./reducers";

const INITIAL_STATE = {
    app: {}
  };

export default createStore(rootReducer, INITIAL_STATE);
