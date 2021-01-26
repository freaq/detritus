import { combineReducers } from "redux";
import app from "./app";
import item from "./item";
import category from "./category";

export default combineReducers({ app, item, category });
