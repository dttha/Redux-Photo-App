import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import reducer from "../features/Photo/photoSlice";

const rootReducer = {
    photos: reducer,
    user: userReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;