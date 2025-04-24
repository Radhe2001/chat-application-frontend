"use server";
import axios from "axios";

const ForgotPassword = async ({ email }: { email: string }) => {
    try {
        const forgotPasswordInput = { email: email };
        const response = await axios.post(
            "http://localhost:5216/api/v1/user/User/forgotPassword",
            forgotPasswordInput
        );

        const statusCode = response.status;
        return { status: statusCode, data: response.data };
    } catch (error: any) {
        const statusCode = error.response.status;
        return { status: statusCode, data: null };
    }
};
export default ForgotPassword;
