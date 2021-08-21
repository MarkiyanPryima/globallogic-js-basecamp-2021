import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../api/userApi";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const payload = await api.getUsers();
    return payload;
});

export const fetchRoles = createAsyncThunk("roles/fetch", async () => {
    const payload = await api.getRoles();
    return payload;
});

export const getUser = createAsyncThunk("users/get", async (id) => {
    const payload = await api.getUser(id);
    return payload;
});


export const deleteUser = createAsyncThunk("users/delete", async (user) => {
    const payload = await api.deleteUser(user);
    return payload;
});


export const createUser = createAsyncThunk("users/create", async (user) => {
    const payload = await api.createUser(user);
    return payload;
});

export const cloneUser = createAsyncThunk("users/clone", async (user) => {
    const payload = await api.editUser(user);
    return payload;
});

export const editUser = createAsyncThunk("users/edit", async (user) => {
    const payload = await api.editUser(user);
    return payload;
});

const initialState = {
    list: [],
    roles: [],
    fetchedUsers: false,
    fetchedRoles: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.fetchedUsers = false;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.fetchedUsers = true;
            state.list = [...action.payload];
        },
        [fetchUsers.rejected]: (state, action) => {
            state.fetchedUsers = false;
            alert(`Error, failed to load the users`);
        },
        [fetchRoles.pending]: (state, action) => {
            state.fetchedRoles = false;
        },
        [fetchRoles.fulfilled]: (state, action) => {
            state.fetchRoles = true;
            state.roles = [...action.payload];
        },
        [fetchRoles.rejected]: (state, action) => {
            state.fetchedRoles = false;
            alert(`Error, failed to load the roles`);
        },
        [createUser.pending]: (state, action) => {
            state.fetchedUsers = false;
        },
        [createUser.fulfilled]: (state, action) => {
            state.fetchedUsers = true;
            state.list = state.list.concat(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            alert(`Error, failed to create a user`)
        },
        [editUser.pending]: (state, action) => {
            state.fetchedUsers = false;
        },
        [editUser.fulfilled]: (state, action) => {
            state.fetchedUsers = true;
            state.list = state.list.map((user) => {
                    return user.id === action.payload.id ? action.payload : user
                }
            );
        },
        [editUser.rejected]: (state, action) => {
            alert(`Error, failed to edit a user`)
        },
        [cloneUser.pending]: (state, action) => {
            state.fetchedUsers = false;
        },
        [cloneUser.fulfilled]: (state, action) => {
            state.fetchedUsers = true;
            state.list = state.list.concat(action.payload);
        },
        [cloneUser.rejected]: (state, action) => {
            alert(`Error, failed to clone a user`)
        },
        [deleteUser.pending]: (state, action) => {
            state.fetchedUsers = false;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.fetchedUsers = true;
            state.list = state.list.filter((user) => user.id !== action.payload[0].id);
        },
        [deleteUser.rejected]: (state, action) => {
            alert(`Error, failed to delete a user`)
        },
    },
});

export default usersSlice.reducer;