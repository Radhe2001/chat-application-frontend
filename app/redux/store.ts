import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/theme/themeSlice"; // Example slice
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import SignalRReducer from "@/app/redux/Slices/SignalR/signalRConnectionSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        signalRConnection: SignalRReducer,
    },

    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
