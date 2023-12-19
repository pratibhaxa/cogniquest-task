import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            email: "",
            password: "",
            loggedIn: false,
        },
        profile: {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            country: "",
            postalCode: "",
            aboutMe: "",
        },
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
    },
});

export const { login, logout, updateProfile } = UserSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserProfile = (state) => state.user.profile;

const persistedReducer = persistReducer(persistConfig, UserSlice.reducer);

export default persistedReducer;
