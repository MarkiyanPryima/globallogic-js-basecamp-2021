import {createSlice} from '@reduxjs/toolkit';

let initialState = [];

const reducerTodo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        completeTodos: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            todo.completed = !todo.completed;
        },
        deleteTodos: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
});

export const {addTodos, deleteTodos, completeTodos} = reducerTodo.actions;
export const todoReducer = reducerTodo.reducer;