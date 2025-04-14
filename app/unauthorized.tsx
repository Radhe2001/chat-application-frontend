"use client";
import Image from "next/image";
import unauthorizedImage from "../public/unauthorized.jpg";
import {
	Box,
	Button,
	Container,
	Stack,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
	const theme = useTheme();
	const router = useRouter();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Stack>
			<Container
				sx={{
					display: "flex",
					placeContent: "center",
					alignItems: "center",
					padding: "50px",
				}}>
				<Image
					src={unauthorizedImage}
					alt="Not Found"
					height={isDesktop ? 700 : isTablet ? 600 : 350}
					width={isDesktop ? 900 : isTablet ? 600 : 350}
				/>
			</Container>
			<Box sx={{ display: "flex", placeContent: "center" }}>
				<Button variant="contained" onClick={() => router.push("/auth/login")}>
					LOGIN
				</Button>
			</Box>
		</Stack>
	);
}
