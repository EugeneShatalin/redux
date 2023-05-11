import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {customersReducer} from "./customersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
