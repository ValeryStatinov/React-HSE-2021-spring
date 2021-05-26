import { combineReducers } from "redux";
import { postReducer } from "./post";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
  theme: themeReducer,
  post: postReducer,
});
