"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import {
	AppBar,
	Avatar,
	Container,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { toggleThemeMode } from "@/app/redux/Slices/theme/themeSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ChatSection = () => {
	const themeMode = useAppSelector((store) => store.theme.mode);
	const dispatch = useAppDispatch();
	return (
		<Container disableGutters>
			<AppBar
				position="sticky"
				sx={{
					top: 0,
					padding: 0,
					margin: 0,
					bgcolor: themeMode === "light" ? "#FFDBDB" : "#414141",
					transition: "background-color 0.3s ease",
					borderRadius: 2,
					height: "7vh",
				}}>
				<Toolbar sx={{ paddingX: 0, gap: 1 }} disableGutters>
					<IconButton>
						<ArrowBackIcon color="secondary" />
					</IconButton>
					<Typography
						variant="h6"
						fontWeight={"bold"}
						letterSpacing={1}
						color="primary"
						sx={{ flexGrow: 1 }}>
						Radheshyam Jha{" "}
					</Typography>
					<Stack
						direction={"row"}
						marginLeft={"auto"}
						marginRight={2}
						gap={0.5}>
						<Avatar sizes={"xl"} />
					</Stack>
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default ChatSection;
