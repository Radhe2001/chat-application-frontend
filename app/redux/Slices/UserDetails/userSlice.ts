import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store"; // Adjust path if needed

interface User {
    userId: number | null;
}

const initialState: User = {
    userId: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<User>) => {
            if (!state.userId && action.payload.userId)
                state.userId = action.payload.userId;
        },
    },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;

export const selectThemeMode = (state: RootState) => state.user.userId;
