"use client";
import Image from "next/image";
import NotFoundImage from "../public/not-found.svg";
import { Container, useMediaQuery, useTheme } from "@mui/material";

export default function NotFound() {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Container
			sx={{
				display: "flex",
				height: "100vh",
				placeContent: "center",
				alignItems: "center",
				padding: "50px",
			}}>
			<Image
				src={NotFoundImage}
				alt="Not Found"
				height={isDesktop ? 900 : isTablet ? 600 : 350}
				width={isDesktop ? 900 : isTablet ? 600 : 350}
			/>
		</Container>
	);
}
