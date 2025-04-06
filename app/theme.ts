"use  client";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		primary: { main: "#1976d2" },
		secondary: { main: "#9c27b0" },
		success: { main: "#2e7d32" },
		error: { main: "#d32f2f" },
		info: { main: "#0288d1" },
		warning: { main: "#ed6c02" },
		text: {
			primary: "#000",
			secondary: "#555",
			disabled: "#999",
		},
		background: {
			default: "#f5f5f5",
			paper: "#ffffff",
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		primary: { main: "#90caf9" },
		secondary: { main: "#ce93d8" },
		success: { main: "#81c784" },
		error: { main: "#ef9a9a" },
		info: { main: "#80deea" },
		warning: { main: "#ffb74d" },
		text: {
			primary: "#ffffff",
			secondary: "#cccccc",
			disabled: "#888888",
		},
		background: {
			default: "#121212",
			paper: "#1e1e1e",
		},
	},
});
