"use client";
import UserVerification from "@/app/Components/auth/UserVerification";
import { Container } from "@mui/material";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
    const params = useParams();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        (async function () {
            const { token } = await params;
            if (token) {
                setToken(token as string);
            }
        })();
    }, [params]);
    return (
        <Container>
            <UserVerification token={token} />
        </Container>
    );
};

export default Page;
