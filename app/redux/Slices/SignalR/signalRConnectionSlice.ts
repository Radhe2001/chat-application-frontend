import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store"; // Adjust path if needed
import { HubConnection } from "@microsoft/signalr";

interface SignalRState {
    connection: HubConnection | null;
}

const initialState: SignalRState = {
    connection: null,
};

export const SignalRSlice = createSlice({
    name: "signalRConnection",
    initialState,
    reducers: {
        setSignalRConnection: (state, action: PayloadAction<HubConnection>) => {
            state.connection = action.payload;
        },
    },
});

export const { setSignalRConnection } = SignalRSlice.actions;

export default SignalRSlice.reducer;

export const getSignalRConnection = (state: RootState) =>
    state.signalRConnection.connection;
