"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import LoginLogo from "../../../public/auth/loginPage_logo.png";
import NextLink from "next/link";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Collapse,
    Container,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useAppDispatch } from "@/app/redux/store";
import { toggleThemeMode } from "@/app/redux/Slices/theme/themeSlice";
import { useState } from "react";

const LoginComponent = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [progress, setProgress] = useState(false);
    const [warning, setWarning] = useState({ open: false, message: "" });

    function handleClick() {
        dispatch(toggleThemeMode());
    }

    const validateCredentials = (): { open: boolean; message: string } => {
        const emailRegex: RegExp =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex: RegExp =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

        if (password === "" && email === "")
            return { open: true, message: "All the fields are required" };
        else if (password === "")
            return { open: true, message: "password required" };
        else if (email === "")
            return { open: true, message: "email  is required" };
        else {
            if (!emailRegex.test(email)) {
                return {
                    open: true,
                    message: "Please check if the email is correct",
                };
            }
            if (password.trim().length < 8 || !passwordRegex.test(password)) {
                return {
                    open: true,
                    message: "Please check if the password is correct",
                };
            }

            return { open: false, message: "" };
        }
    };
    function handleUserLogin() {
        setProgress(true);
        const { open, message } = validateCredentials();
        if (open) {
            setWarning({ open: open, message: message });
            setTimeout(() => {
                setWarning({ open: false, message: "" });
                setProgress(false);
            }, 3000);
            return;
        }
    }
    return (
        <Container
            className={styles.page}
            sx={{
                display: "flex",
                placeContent: "center",
                alignItems: "center",
            }}
        >
            <Stack
                sx={{
                    paddingX: 8,
                    paddingBottom: 8,
                    elevation: 9,
                    boxShadow: 9,
                    borderRadius: 4,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        placeContent: "center",
                    }}
                >
                    <Image
                        src={LoginLogo}
                        alt="Login"
                        height={150}
                        width={150}
                    />
                </Box>
                <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    Login
                </Typography>
                <Stack sx={{ marginTop: 4 }} gap={1}>
                    <TextField
                        required
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        sx={{
                            width: 500,
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                    />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Password"
                        type="password"
                        variant="outlined"
                        sx={{
                            width: 500,
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            paddingY: 2,
                            fontSize: "medium",
                            fontWeight: "bold",
                            marginTop: 2,
                        }}
                        onClick={() => {
                            if (!progress) handleUserLogin();
                        }}
                    >
                        {progress ? (
                            <CircularProgress color="info" size={25} />
                        ) : (
                            "Log in"
                        )}
                    </Button>
                    <Link
                        href="/auth/forgotPassword"
                        component={NextLink}
                        textAlign={"center"}
                        marginTop={2}
                    >
                        Forgot password?
                    </Link>
                    <Stack
                        direction={"row"}
                        gap={1}
                        sx={{ display: "flex", placeContent: "center" }}
                    >
                        <Typography>Don&apos;t have an account?</Typography>
                        <Link href="/auth/register" component={NextLink}>
                            Sign up
                        </Link>
                    </Stack>
                </Stack>
                <Collapse in={warning.open} sx={{ marginTop: 2 }}>
                    <Alert severity="warning" variant="outlined" sx={{ mb: 2 }}>
                        {warning.message}
                    </Alert>
                </Collapse>
            </Stack>
        </Container>
    );
};
export default LoginComponent;
