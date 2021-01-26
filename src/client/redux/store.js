import { createStore } from "redux";
import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const INITIAL_STATE = {
    app: {},
    category: {},
    item: {}
  };

  export default createStore(rootReducer, INITIAL_STATE, composeWithDevTools());