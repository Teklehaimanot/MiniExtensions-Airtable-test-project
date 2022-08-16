import { createStore, applyMiddleware } from "redux";
import { ClassReducer } from "./ClassReducer";
import thunk from "redux-thunk";

const store = createStore(ClassReducer, applyMiddleware(thunk))

export default store