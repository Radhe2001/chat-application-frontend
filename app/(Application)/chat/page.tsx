"use client";
import ChatSection from "@/app/Components/chat/ChatSection";
import Contact from "@/app/Components/chat/Contact";
import { SignalRProvider, useSignalR } from "@/app/context/SignalRContext";
import { Box, Container, Stack } from "@mui/material";

const Page = () => {
    return (
        <SignalRProvider>
            <Container
                sx={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    placeContent: "center",
                    alignItems: "center",
                    bgcolor: "background.default",
                }}
            >
                <Stack direction={"row"} gap={2}>
                    <Box
                        sx={{
                            height: "95vh",
                            width: "30vw",
                            bgcolor: "rgba(255,255,255,0.2)",
                            borderRadius: 2,
                            boxShadow: "0 4px 30px  rgba(0,0,0,0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            padding: 0,
                            overflowY: "auto",
                            "&::-webkit-scrollbar": {
                                width: "6px",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "rgba(0,0,0,0.3)",
                                borderRadius: "10px",
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        <Contact />
                    </Box>
                    <Box
                        sx={{
                            height: "95vh",
                            width: "62vw",
                            bgcolor: "rgba(255,255,255,0.2)",
                            borderRadius: 2,
                            boxShadow: "0 4px 30px  rgba(0,0,0,0.2)",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                        }}
                    >
                        <ChatSection />
                    </Box>
                </Stack>
            </Container>
        </SignalRProvider>
    );
};

export default Page;
