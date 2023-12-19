import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from '../features/UserSlice';
import { persistStore } from "redux-persist";

export default configureStore({
    reducer: {
        user: persistedReducer,
    },
});
