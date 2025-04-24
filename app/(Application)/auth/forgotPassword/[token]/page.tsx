"use client";
import ForgotUserPassword from "@/app/Components/auth/ForgotUserPassword";
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
            <ForgotUserPassword token={token} />
        </Container>
    );
};

export default Page;
