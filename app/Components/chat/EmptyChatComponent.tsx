"use client";

import {
    Avatar,
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

const EmptyChatComponent = () => {
    return (
        <Container
            sx={{
                display: "flex",
                placeContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Stack gap={2} alignItems="center">
                <Box sx={{ display: "flex", placeContent: "center" }}>
                    <Avatar
                        sx={{ height: 100, width: 100 }}
                        src={undefined} // You can add a profile pic or a placeholder
                    />
                </Box>

                <Typography
                    variant="h6"
                    textAlign="center"
                    letterSpacing={1}
                    fontWeight="bold"
                >
                    Radheshyam Jha
                </Typography>

                <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ maxWidth: 300 }}
                >
                    No messages yet. Start the conversation!
                </Typography>
            </Stack>
        </Container>
    );
};

export default EmptyChatComponent;
