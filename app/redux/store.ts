import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/app/redux/Slices/theme/themeSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "@/app/redux/Slices/UserDetails/userSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
    },

    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
