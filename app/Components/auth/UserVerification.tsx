"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import LoginLogo from "../../../public/auth/loginPage_logo.png";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TokenVerificationAction from "@/app/Action/AuthActions/TokenVerificationAction";
import UserAccountVerification from "@/app/Action/AuthActions/UserAccountVerification";
const Page = ({ token }: { token: string | null }) => {
    const [userVerified, setUserVerified] = useState<boolean | null>(null);
    const router = useRouter();
    useEffect(() => {
        (async function () {
            TokenVerificationAction(token!).then((res) => {
                if (res !== null)
                    if (res === false) router.replace("/unauthorized");
            });
        })();
    });

    async function verifyUserAccount(status: boolean) {
        UserAccountVerification(token, status)
            .then((res) => {})
            .catch((err) => {});
    }

    function redirectToLogin() {
        router.push("/auth/login");
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
                    width: "60%",
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
                    User Verification
                </Typography>
                <Container
                    sx={{
                        display: "flex",
                        placeContent: "center",
                    }}
                >
                    {userVerified !== null ? (
                        <Stack>
                            <Typography
                                variant="h6"
                                color="info"
                                fontWeight={"bold"}
                                textAlign={"center"}
                                marginTop={4}
                            >
                                {userVerified
                                    ? "Your account has been successfully verified, You can login into your account now."
                                    : "This account has been removed from the database successfully."}
                            </Typography>
                            {userVerified ? (
                                <Button
                                    variant="contained"
                                    sx={{
                                        paddingY: 2,
                                        fontSize: "medium",
                                        fontWeight: "bold",
                                        marginTop: 2,
                                    }}
                                    onClick={redirectToLogin}
                                >
                                    Sign in
                                </Button>
                            ) : null}
                        </Stack>
                    ) : (
                        <Stack sx={{ width: "100%" }}>
                            <Typography
                                variant="h6"
                                color="info"
                                fontWeight={"bold"}
                                textAlign={"center"}
                                marginTop={4}
                            >
                                To continue, please confirm your identity by
                                clicking the &apos;<b>Authorize</b>&apos;
                                button.
                            </Typography>
                            <Box
                                gap={2}
                                sx={{ display: "flex", placeContent: "center" }}
                            >
                                <Button
                                    variant="contained"
                                    color="warning"
                                    sx={{
                                        // paddingY: 2,
                                        fontSize: "medium",
                                        fontWeight: "bold",
                                        marginTop: 2,
                                    }}
                                    onClick={() => verifyUserAccount(false)}
                                >
                                    Un-Authorize
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        // paddingY: 2,
                                        fontSize: "medium",
                                        fontWeight: "bold",
                                        marginTop: 2,
                                    }}
                                    onClick={() => verifyUserAccount(true)}
                                >
                                    Authorize
                                </Button>
                            </Box>
                        </Stack>
                    )}
                </Container>
            </Stack>
        </Container>
    );
};

export default Page;
