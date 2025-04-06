"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import { useAppSelector } from "../redux/store";

const ThemeContext = ({ children }: { children: React.ReactNode }) => {
	const colorMode = useAppSelector((state) => state.theme.mode);
	return (
		<ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
export default ThemeContext;
