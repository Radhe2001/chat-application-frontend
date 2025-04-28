"use client";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Button,
    ButtonBase,
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

type ContactType = {
    id: number;
    isActive: boolean;
    profilePic: string | undefined;
    name: string;
    email: string;
    status: string;
};
const Contact = () => {
    const dispatch = useAppDispatch();
    const themeMode = useAppSelector((state) => state.theme.mode);
    const [id, setId] = useState<string | undefined>(undefined);
    const [searchOpen, setSearchOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const appBarRef = useRef<HTMLElement | null>(null);
    const [contactList, setContactList] = useState<Array<ContactType>>([
        {
            id: 1,
            isActive: true,
            profilePic: undefined,
            name: "Radheshyam Jha",
            email: "radheshyam.jha@example.com",
            status: "Live the life in your own way",
        },
        {
            id: 2,
            isActive: false,
            profilePic: undefined,
            name: "Anjali Sharma",
            email: "anjali.sharma@example.com",
            status: "Dream big, work hard",
        },
        {
            id: 3,
            isActive: true,
            profilePic: undefined,
            name: "Vikram Singh",
            email: "vikram.singh@example.com",
            status: "Stay positive, work hard",
        },
        {
            id: 4,
            isActive: true,
            profilePic: undefined,
            name: "Pooja Patel",
            email: "pooja.patel@example.com",
            status: "Creating my own sunshine",
        },
        {
            id: 5,
            isActive: false,
            profilePic: undefined,
            name: "Saurabh Mishra",
            email: "saurabh.mishra@example.com",
            status: "Focused and fearless",
        },
        {
            id: 6,
            isActive: true,
            profilePic: undefined,
            name: "Sneha Verma",
            email: "sneha.verma@example.com",
            status: "Chasing dreams, not people",
        },
        {
            id: 7,
            isActive: false,
            profilePic: undefined,
            name: "Amit Dubey",
            email: "amit.dubey@example.com",
            status: "Work hard in silence, let success make the noise",
        },
        {
            id: 8,
            isActive: false,
            profilePic: undefined,
            name: "Kritika Sinha",
            email: "kritika.sinha@example.com",
            status: "Believe you can and you're halfway there",
        },
        {
            id: 9,
            isActive: false,
            profilePic: undefined,
            name: "Rajeev Chauhan",
            email: "rajeev.chauhan@example.com",
            status: "Success is a journey, not a destination",
        },
        {
            id: 10,
            isActive: true,
            profilePic: undefined,
            name: "Divya Mehta",
            email: "divya.mehta@example.com",
            status: "Hustle until your haters ask if you're hiring",
        },
        {
            id: 11,
            isActive: true,
            profilePic: undefined,
            name: "Pratik Joshi",
            email: "pratik.joshi@example.com",
            status: "Stay hungry, stay foolish",
        },
        {
            id: 12,
            isActive: false,
            profilePic: undefined,
            name: "Nisha Kumari",
            email: "nisha.kumari@example.com",
            status: "Turning dreams into reality",
        },
        {
            id: 13,
            isActive: false,
            profilePic: undefined,
            name: "Kunal Bhatt",
            email: "kunal.bhatt@example.com",
            status: "Keep pushing forward",
        },
        {
            id: 14,
            isActive: false,
            profilePic: undefined,
            name: "Ritika Singh",
            email: "ritika.singh@example.com",
            status: "Be stronger than your excuses",
        },
        {
            id: 15,
            isActive: true,
            profilePic: undefined,
            name: "Aditya Chauhan",
            email: "aditya.chauhan@example.com",
            status: "Consistency is the key to success",
        },
    ]);
    const [searchContactList, setSearchContactList] = useState<
        ContactType[] | null
    >(null);
    useEffect(() => {
        setSearchOpen(Boolean(anchorEl));
        setId(searchOpen ? "simple-popover" : undefined);
    }, []);
    function handleSearchPopoverClose() {
        setAnchorEl(null);
        setSearchOpen(false);
    }

    function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;

        const filteredList = contactList.filter((item) =>
            item.email.startsWith(text)
        );

        setSearchContactList(filteredList);
    }

    const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearchOpen(true);
        setAnchorEl(appBarRef.current);
    };
    return (
        <Container disableGutters>
            <AppBar
                position="sticky"
                sx={{
                    // marginTop: 2,
                    top: 0,
                    bgcolor: themeMode === "light" ? "#FFDBDB" : "#414141",
                    transition: "background-color 0.3s ease",
                }}
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
                                    themeMode === "light"
                                        ? "#FFDBDB"
                                        : "#222831",
                                color:
                                    themeMode !== "light"
                                        ? "#FFDBDB"
                                        : "#3D365C",
                                "&:hover": {
                                    backgroundColor:
                                        themeMode !== "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                    color:
                                        themeMode === "light"
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
                                        themeMode !== "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                    "&:hover": {
                                        color:
                                            themeMode === "light"
                                                ? "#FFDBDB"
                                                : "#3D365C",
                                    },
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                bgcolor:
                                    themeMode === "light"
                                        ? "#FFDBDB"
                                        : "#222831",
                                color:
                                    themeMode !== "light"
                                        ? "#FFDBDB"
                                        : "#3D365C",
                                "&:hover": {
                                    backgroundColor:
                                        themeMode !== "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                    color:
                                        themeMode === "light"
                                            ? "#FFDBDB"
                                            : "#3D365C",
                                },
                            }}
                            size="medium"
                            onClick={() => {
                                dispatch(toggleThemeMode());
                            }}
                        >
                            {themeMode === "light" ? (
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
                sx={{ maxHeight: "60%" }}
            >
                <Box sx={{ width: "30vw", bgcolor: "#414141" }}>
                    <Stack
                        sx={{
                            // paddingTop: 2,
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
                            onChange={handleSearchTextChange}
                        />
                    </Stack>
                </Box>
                <Stack sx={{ bgcolor: "#414141", paddingBottom: 1 }} gap={1}>
                    {searchContactList &&
                        searchContactList.map((contact) => {
                            return (
                                <ButtonBase
                                    key={contact.id}
                                    sx={{ width: "100%", borderRadius: 2 }}
                                    onClick={() => {}}
                                >
                                    <Paper
                                        sx={{
                                            bgcolor: "Background.paper",
                                            width: "100%",
                                            padding: 1,
                                            "&:hover": {
                                                bgcolor:
                                                    themeMode === "dark"
                                                        ? "#420516"
                                                        : "#FFDBDB",
                                            },
                                        }}
                                        key={contact.id}
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
                                            <Badge
                                                overlap="circular"
                                                anchorOrigin={{
                                                    vertical: "top",
                                                    horizontal: "right",
                                                }}
                                                variant="dot"
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        backgroundColor:
                                                            contact.isActive
                                                                ? "#006400"
                                                                : "#D3D3D3",
                                                        boxShadow: `0 0 0 2px white`,
                                                        height: "8px",
                                                        minWidth: "8px",
                                                        borderRadius: "50%",
                                                    },
                                                }}
                                            >
                                                <Avatar
                                                    sizes="xl"
                                                    alt={contact.name}
                                                    src={contact.profilePic}
                                                />
                                            </Badge>{" "}
                                            <Stack sx={{ textAlign: "start" }}>
                                                <Typography
                                                    variant="body2"
                                                    letterSpacing={0.7}
                                                >
                                                    {contact.name}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    letterSpacing={0.7}
                                                    sx={{
                                                        userSelect: "none",
                                                    }}
                                                    noWrap
                                                >
                                                    {contact.status}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                </ButtonBase>
                            );
                        })}
                </Stack>
            </Popover>

            <Stack sx={{ marginTop: 2 }} gap={1}>
                {contactList.map((contact) => {
                    return (
                        <ButtonBase
                            key={contact.id}
                            sx={{ width: "100%", borderRadius: 2, paddingX: 2 }}
                            onClick={() => {}}
                        >
                            <Paper
                                sx={{
                                    bgcolor: "Background.paper",
                                    width: "100%",
                                    padding: 1,
                                    "&:hover": {
                                        bgcolor:
                                            themeMode === "dark"
                                                ? "#420516"
                                                : "#FFDBDB",
                                    },
                                }}
                                key={contact.id}
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
                                    <Badge
                                        overlap="circular"
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        variant="dot"
                                        sx={{
                                            "& .MuiBadge-badge": {
                                                backgroundColor:
                                                    contact.isActive
                                                        ? "#006400"
                                                        : "#D3D3D3",
                                                boxShadow: `0 0 0 2px white`,
                                                height: "8px",
                                                minWidth: "8px",
                                                borderRadius: "50%",
                                            },
                                        }}
                                    >
                                        <Avatar
                                            sizes="xl"
                                            alt={contact.name}
                                            src={contact.profilePic}
                                        />
                                    </Badge>{" "}
                                    <Stack sx={{ textAlign: "start" }}>
                                        <Typography
                                            variant="body1"
                                            fontWeight={"bold"}
                                            letterSpacing={0.7}
                                        >
                                            {contact.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            letterSpacing={0.7}
                                            sx={{ userSelect: "none" }}
                                        >
                                            {contact.status.length <= 40
                                                ? contact.status
                                                : contact.status.slice(0, 40) +
                                                  "..."}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </ButtonBase>
                    );
                })}
            </Stack>
        </Container>
    );
};

export default Contact;
