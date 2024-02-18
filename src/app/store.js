import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"






// giving access of our slice to the store.
export const store = configureStore({
    reducer : todoReducer,
});