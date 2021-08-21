import {configureStore} from "@reduxjs/toolkit";
import {logger} from 'redux-logger/src';
import {todoReducer} from "../Redux/todoReducer";
import usersReducer from "../Redux/usersReducer";

const store = configureStore({
    reducer: {
        todoList: todoReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
