"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import {
    AppBar,
    Avatar,
    Container,
    IconButton,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import ChatComponent from "./ChatComponent";
import EmptyChatComponent from "./EmptyChatComponent";

const ChatSection = () => {
    const themeMode = useAppSelector((store) => store.theme.mode);
    const dispatch = useAppDispatch();
    const [chatText, setChatText] = useState("");
    const [isActiveChat, setIsActiveChat] = useState(true);
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
        }
    };

    return (
        <Container disableGutters>
            <AppBar
                position="sticky"
                sx={{
                    top: 0,
                    padding: 0,
                    margin: 0,
                    bgcolor: themeMode === "light" ? "#FFDBDB" : "#414141",
                    transition: "background-color 0.3s ease",
                    borderRadius: 2,
                }}
            >
                <Toolbar sx={{ paddingX: 0, gap: 1 }} disableGutters>
                    <IconButton>
                        <ArrowBackIcon color="secondary" />
                    </IconButton>
                    <Typography
                        variant="h6"
                        fontWeight={"bold"}
                        letterSpacing={1}
                        color="primary"
                        sx={{ flexGrow: 1 }}
                    >
                        Radheshyam Jha{" "}
                    </Typography>
                    <Stack
                        direction={"row"}
                        marginLeft={"auto"}
                        marginRight={2}
                        gap={0.5}
                    >
                        <Avatar sizes={"xl"} />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Container
                disableGutters
                sx={{
                    overflowY: "auto",
                    paddingY: 1,
                    paddingX: 2,
                    height: "calc(100vh - 160px)",
                }}
            >
                {isActiveChat ? <ChatComponent /> : <EmptyChatComponent />}
            </Container>
            <Container
                sx={{
                    bottom: 0,
                    margin: 0,
                    bgcolor: themeMode === "light" ? "#FFDBDB" : "#414141",
                    borderEndStartRadius: 2,
                    borderEndEndRadius: 2,
                    elevation: 0,
                    boxShadow: 9,
                    position: "fixed",
                }}
            >
                <Stack direction={"row"} gap={1}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        autoComplete="off"
                        autoCorrect="on"
                        placeholder="Start Typing ..."
                        fullWidth
                        sx={{
                            marginY: "auto",
                        }}
                        slotProps={{
                            input: {
                                sx: {
                                    letterSpacing: "1px",
                                    fontSize: (theme) =>
                                        theme.typography.subtitle1.fontSize,
                                    paddingY: 1,
                                    overflow: "auto",
                                    msOverflowStyle: "none",
                                    scrollbarWidth: "none",
                                    appearance: "none",
                                    "&::-webkit-scrollbar": {
                                        display: "none",
                                    },
                                },
                            },
                        }}
                        multiline
                        maxRows={2}
                        value={chatText}
                        onKeyUp={handleKeyUp}
                        onChange={(e) => setChatText(e.target.value.toString())}
                    />{" "}
                    <IconButton sx={{ padding: 2, bgcolor: "paper" }}>
                        <SendIcon color="primary" />
                    </IconButton>
                </Stack>
            </Container>
        </Container>
    );
};

export default ChatSection;
