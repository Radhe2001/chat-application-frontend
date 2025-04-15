"use client";
import Image from "next/image";
import NotFoundImage from "../public/not-found.svg";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";

export default function NotFound() {
    const theme = useTheme();

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
            }}
        >
            {" "}
            <Box
                sx={{
                    height: isDesktop ? "70vh" : isTablet ? "70vh" : "70vh",
                    width: isDesktop ? "50vw" : isTablet ? "70vw" : "80vw",
                    position: "relative",
                }}
            >
                <Image src={NotFoundImage} alt="Not Found" fill />
            </Box>
        </Container>
    );
}
