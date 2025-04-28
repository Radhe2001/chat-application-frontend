"use client";

import { useAppSelector } from "@/app/redux/store";
import { Avatar, Box, Chip, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";

const ChatComponent = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            message: "Hello, how are you?",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 2,
            message: "Hey, I'm good! How about you?",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 3,
            message: "Doing well, working on a project.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 4,
            message:
                "That's great! What's the project about? That's great! What's the project about? That's great! What's the project about?",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 5,
            message: "A new chat application.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 6,
            message: "Wow, sounds exciting!",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 7,
            message: "Yeah, quite challenging too.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 8,
            message: "Good luck with that!",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 9,
            message: "Thanks! Appreciate it.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 10,
            message: "Let me know if you need any help.",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 11,
            message: "Sure, will do.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 12,
            message: "Are you using React for frontend?",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 13,
            message: "Yes, React with Material UI.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 14,
            message: "Nice combo!",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 15,
            message: "Thanks. Hoping it turns out well.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 16,
            message: "It surely will!",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 17,
            message: "Appreciate your support.",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 18,
            message: "Always here to help.",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
        {
            id: 19,
            message: "Do you prefer light mode or dark mode?",
            sentBy: "Ramesh Kumar",
            sentOn: "28-04-2025",
            isReceived: true,
        },
        {
            id: 20,
            message: "Dark mode! Less strain on eyes.",
            sentBy: "Radheshyam Jha",
            sentOn: "28-04-2025",
            isReceived: false,
        },
    ]);
    const theme = useAppSelector((state) => state.theme.mode);
    return (
        <Container
            disableGutters
            sx={{
                alignItems: "end",
                height: "auto",
                overflow: "auto",
                paddingY: 1,
            }}
        >
            <Stack sx={{ overflowY: "auto", gap: 1 }}>
                {messages.map((message) => {
                    return (
                        <Container
                            disableGutters
                            key={message.id}
                            sx={{
                                width: "100%",
                                display: "flex",
                            }}
                        >
                            <Stack
                                direction={"row"}
                                gap={1}
                                sx={{
                                    marginLeft:
                                        message.sentBy === "Radheshyam Jha"
                                            ? "auto"
                                            : 0,
                                    marginRight:
                                        message.sentBy === "Radheshyam Jha"
                                            ? 0
                                            : "auto",
                                    maxWidth: "60%",
                                }}
                            >
                                <Avatar
                                    sx={{
                                        visibility:
                                            message.sentBy === "Radheshyam Jha"
                                                ? "collapse"
                                                : "visible",
                                    }}
                                    sizes="sm"
                                    src={undefined}
                                ></Avatar>
                                <Box
                                    sx={{
                                        bgcolor:
                                            theme == "dark"
                                                ? message.sentBy ==
                                                  "Radheshyam Jha"
                                                    ? "#1F5142"
                                                    : "#202C33"
                                                : message.sentBy ==
                                                  "Radheshyam Jha"
                                                ? "#D9FDD3"
                                                : "#FFFFFF",

                                        paddingY: 1,
                                        paddingX: 2,
                                        borderRadius: 1,
                                    }}
                                >
                                    <Stack>
                                        <Typography
                                            color="primary"
                                            variant="body2"
                                            letterSpacing={1}
                                        >
                                            {message.message}
                                        </Typography>
                                        <Stack
                                            direction={"row"}
                                            sx={{
                                                display: "flex",
                                                placeContent: "end",
                                            }}
                                            gap={1}
                                        >
                                            <Typography
                                                color="secondary"
                                                variant="subtitle2"
                                                letterSpacing={1}
                                            >
                                                {message.sentOn}
                                            </Typography>
                                            <Typography
                                                color="primary"
                                                variant="body1"
                                                letterSpacing={1}
                                            ></Typography>
                                            {message.sentBy ==
                                            "Radheshyam Jha" ? (
                                                message.isReceived ? (
                                                    <DoneAllIcon
                                                        sx={{
                                                            color: "secondary",
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                ) : (
                                                    <DoneIcon
                                                        sx={{
                                                            color: "secondary",
                                                            fontSize: "18px",
                                                        }}
                                                    />
                                                )
                                            ) : null}
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Avatar
                                    sx={{
                                        visibility:
                                            message.sentBy !== "Radheshyam Jha"
                                                ? "collapse"
                                                : "visible",
                                    }}
                                ></Avatar>
                            </Stack>
                        </Container>
                    );
                })}
            </Stack>
        </Container>
    );
};

export default ChatComponent;
