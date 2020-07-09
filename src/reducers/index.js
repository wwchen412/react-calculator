import { combineReducers } from "redux";

import calculator from "./calculator";
import modal from "./modal";
const rootReducer = combineReducers({
  calculator,
  modal,
});

export default rootReducer;
