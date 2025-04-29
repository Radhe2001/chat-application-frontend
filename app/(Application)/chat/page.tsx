"use client";
import ChatSection from "@/app/Components/chat/ChatSection";
import Contact from "@/app/Components/chat/Contact";
import { Box, Container, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import connect from "@/app/Utils/SignalRConnection";
import { useAppDispatch } from "@/app/redux/store";
import { setSignalRConnection } from "@/app/redux/Slices/SignalR/signalRConnectionSlice";
import * as signalR from "@microsoft/signalr";

const Page = () => {
    const connectionRef = useRef<signalR.HubConnection | null>(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5216/chat", {
                // accessTokenFactory: () => yourJwtToken, // If using JWT
                withCredentials: true,
                transport:
                    signalR.HttpTransportType.WebSockets |
                    signalR.HttpTransportType.LongPolling,
            })
            .configureLogging(signalR.LogLevel.Information)
            .withAutomaticReconnect()
            .build();

        connection
            .start()
            .then(async () => {
                await connection.send("CreateConnection", "123");
                //dispatch(setSignalRConnection(connection));
                connectionRef.current = connection;
            })
            .catch((err) => console.log("SignalR error : " + err));
    });

    return (
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
    );
};

export default Page;
