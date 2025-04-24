"use server";
import axios from "axios";

const UserLogin = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<{ status: number; data: { token: string } | string | null }> => {
    const loginInput = {
        email: email,
        password: password,
    };
    try {
        const response = await axios.post(
            "http://localhost:5216/api/v1/user/User/login",
            loginInput
        );
        const statusCode = response.status;
        return { status: statusCode, data: response.data };
    } catch (error: any) {
        const statusCode = error.response.status;
        return { status: statusCode, data: null };
    }
};

export default UserLogin;
