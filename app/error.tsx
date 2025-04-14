"use client";
import Image from "next/image";
import errorImage from "../public/website-maintenance.svg";
import {
	Container,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { useEffect } from "react";

export default function Error({ error, reset }) {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

	useEffect(() => {}, [error]);

	return (
		<Container
			sx={{
				display: "flex",
				height: "100vh",
				placeContent: "center",
				alignItems: "center",
				padding: "50px",
			}}>
			<Stack>
				<Image
					src={errorImage}
					alt="Not Found"
					height={isDesktop ? 900 : isTablet ? 600 : 350}
					width={isDesktop ? 900 : isTablet ? 600 : 350}
				/>
				<Typography variant="h4" textAlign={"center"}>
					{error.toString()}
				</Typography>
			</Stack>
		</Container>
	);
}
