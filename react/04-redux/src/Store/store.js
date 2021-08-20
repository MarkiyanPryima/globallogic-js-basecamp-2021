import {configureStore} from "@reduxjs/toolkit";
import {logger} from 'redux-logger/src';
import {todoReducer} from "../Redux/todoReducer";

const store = configureStore({
    reducer: {
        todoList: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
