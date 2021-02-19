import { combineReducers } from "redux";
import app from "./app";
import user from "./user";
import item from "./item";
import category from "./category";

export default combineReducers({ app, user, item, category });
