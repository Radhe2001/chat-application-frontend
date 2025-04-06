import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store"; // Adjust path if needed
import { PaletteMode } from "@mui/material";

interface ThemeState {
	mode: PaletteMode;
}

const initialState: ThemeState = {
	mode: "light",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
			state.mode = action.payload;
		},
		toggleThemeMode: (state) => {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
	},
});

export const { setThemeMode, toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;

export const selectThemeMode = (state: RootState) => state.theme.mode;
