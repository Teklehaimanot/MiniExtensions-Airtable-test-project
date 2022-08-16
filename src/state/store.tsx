import { createStore, applyMiddleware } from "redux";
import { ClassReducer } from "./ClassReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger"

// const middeleware = [thunk]

// if (process.env.development) {
//     middeleware.push(logger)
// }

const store = createStore(ClassReducer, applyMiddleware(thunk))

export default store