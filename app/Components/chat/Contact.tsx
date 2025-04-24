"use client";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    Paper,
    Popover,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/store";
import { toggleThemeMode } from "@/app/redux/Slices/theme/themeSlice";
import SearchIcon from "@mui/icons-material/Search";
const Contact = () => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState<string | undefined>(undefined);
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [searchText, setSearchText] = useState("");
    const appBarRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        setSearchOpen(Boolean(anchorEl));
        setId(searchOpen ? "simple-popover" : undefined);
    }, []);
    function handleSearchPopoverClose() {
        setAnchorEl(null);
        setSearchOpen(false);
    }

    const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearchOpen(true);
        setAnchorEl(appBarRef.current);
    };
    return (
        <Container>
            <AppBar
                position="static"
                sx={{ bgcolor: "transparent", marginTop: 2 }}
                ref={appBarRef}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        fontWeight={"bold"}
                        letterSpacing={1}
                        color="primary"
                        sx={{ flexGrow: 1 }}
                    >
                        Chat App
                    </Typography>
                    <Stack direction={"row"} marginLeft={"auto"} gap={0.5}>
                        <IconButton
                            sx={{
                                bgcolor:
                                    useAppSelector(
                                        (state) => state.theme.mode
                                    ) === "light"
                                        ? "#FFDBDB"
                                        : "#222831",
                                color:
                                    useAppSelector(
                                        (state) => state.theme.mode
                                    ) !== "light"
                                        ? "#FFDBDB"
                                        : "#3D365C",

                                "&:hover": {
                                    backgroundColor:
                                        useAppSelector(
                                            (state) => state.theme.mode
                                        ) !== "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",

                                    color:
                                        useAppSelector(
                                            (state) => state.theme.mode
                                        ) === "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                },
                            }}
                            size="medium"
                            onClick={handleSearchClick}
                        >
                            <SearchIcon
                                color="info"
                                fontSize="medium"
                                sx={{
                                    fontWeight: "bold",
                                    color:
                                        useAppSelector(
                                            (state) => state.theme.mode
                                        ) !== "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                    "&:hover": {
                                        color:
                                            useAppSelector(
                                                (state) => state.theme.mode
                                            ) === "light"
                                                ? "#FFDBDB"
                                                : "#3D365C",
                                    },
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                bgcolor:
                                    useAppSelector(
                                        (state) => state.theme.mode
                                    ) === "light"
                                        ? "#FFDBDB"
                                        : "#222831",

                                color:
                                    useAppSelector(
                                        (state) => state.theme.mode
                                    ) !== "light"
                                        ? "#FFDBDB"
                                        : "#3D365C",
                                // marginTop: "auto",
                                //     arginBottom: "auto",
                                "&:hover": {
                                    backgroundColor:
                                        useAppSelector(
                                            (state) => state.theme.mode
                                        ) !== "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",

                                    color:
                                        useAppSelector(
                                            (state) => state.theme.mode
                                        ) === "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                },
                            }}
                            size="medium"
                            onClick={() => {
                                dispatch(toggleThemeMode());
                            }}
                        >
                            {useAppSelector((state) => state.theme.mode) ===
                            "light" ? (
                                <Brightness4Icon />
                            ) : (
                                <Brightness5Icon />
                            )}
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Popover
                id={id}
                open={searchOpen}
                anchorEl={anchorEl}
                onClose={handleSearchPopoverClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <Box sx={{ width: "27vw", paddingX: 2 }}>
                    <Stack
                        sx={{
                            paddingTop: 2,
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            gap: 2,
                        }}
                    >
                        {" "}
                        <TextField
                            variant="outlined"
                            placeholder="Search"
                            sx={{
                                width: "100%",
                                padding: 0,
                                marginBottom: 2,
                                letterSpacing: 0.5,
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: "rgba(65, 5, 5, 0.29)",
                                    border: 1,
                                    height: 50,
                                },
                            }}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon
                                                color="info"
                                                fontSize="medium"
                                                sx={{ fontWeight: "bold" }}
                                            />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            value={searchText}
                            onChange={(e) =>
                                setSearchText(e.target.value.trim())
                            }
                        />
                    </Stack>
                </Box>
            </Popover>

            <Stack sx={{ marginTop: 2 }}>
                <Paper
                    sx={{
                        bgcolor: "Background.paper",
                        width: "100%",
                        padding: 1,
                    }}
                    elevation={3}
                >
                    <Stack
                        direction={"row"}
                        gap={2}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {" "}
                        <Avatar sizes="xl"></Avatar>
                        <Stack>
                            <Typography
                                variant="body1"
                                fontWeight={"bold"}
                                letterSpacing={0.7}
                            >
                                Jack Williams
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                letterSpacing={0.7}
                                sx={{ userSelect: "none" }}
                            >
                                King of my own world
                            </Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Stack>
        </Container>
    );
};

export default Contact;
