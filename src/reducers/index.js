import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  usersReducer,
  counterReducer,
});

export default rootReducer;
