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
                }}
            >
                <Box
                    sx={{
                        height: isDesktop ? "70vh" : isTablet ? "70vh" : "70vh",
                        width: isDesktop ? "50vw" : isTablet ? "70vw" : "80vw",
                        position: "relative",
                    }}
                >
                    <Image src={unauthorizedImage} alt="Not Found" fill />
                </Box>
            </Container>
            <Box sx={{ display: "flex", placeContent: "center" }}>
                <Button
                    variant="contained"
                    onClick={() => router.push("/auth/login")}
                >
                    LOGIN
                </Button>
            </Box>
        </Stack>
    );
}
