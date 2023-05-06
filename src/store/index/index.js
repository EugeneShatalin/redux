import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {customersReducer} from "./customersReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
