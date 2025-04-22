"use server";

import axios from "axios";

const TokenVerificationAction = async (
    token: string | null
): Promise<boolean | null> => {
    if (!token) return null;
    const registrationInput = {
        verificationToken: token,
        taskType: "tokenValidation",
    };
    try {
        const response = await axios.post(
            "http://localhost:5216/api/v1/user/User/accountVerification",
            registrationInput
        );
        const statusCode = response.status;
        if (statusCode === 200) return true;
        return false;
    } catch (error: any) {
        return false;
    }
};

export default TokenVerificationAction;
