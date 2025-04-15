"use client";
import Image from "next/image";
import errorImage from "../public/website-maintenance.svg";
import {
    Box,
    Container,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    const theme = useTheme();

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
            }}
        >
            <Stack>
                <Box
                    sx={{
                        height: isDesktop ? "70vh" : isTablet ? "70vh" : "70vh",
                        width: isDesktop ? "50vw" : isTablet ? "70vw" : "80vw",
                        position: "relative",
                    }}
                >
                    <Image src={errorImage} alt="Not Found" fill />
                </Box>

                <Typography variant="h6" color="error" textAlign={"center"}>
                    Message : {error.message.toString()}
                </Typography>
            </Stack>
        </Container>
    );
}
