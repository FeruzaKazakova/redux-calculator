import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/AuthReducer";
import { calculatorReducer } from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    auth: authReducer,
})

export const store = createStore(rootReducer)
