import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
const store = createStore(counterReducer);
export default store;
