import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {jobListReducer} from "./slices";

const rootReducer = combineReducers({
    jobListReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})
const store = setUpStore();

export type RootState = ReturnType<typeof store.getState>
export {
    store
}