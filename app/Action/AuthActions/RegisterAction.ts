"use server";
import axios from "axios";

const RegisterAction = async (registrationInput: {
	username: string;
	email: string;
	password: string;
}) => {
	try {
		const response = await axios.post(
			"http://localhost:5216/api/v1/user/User/register",
			registrationInput
		);

		const statusCode = response.status;
		return { status: statusCode, data: response.data };
	} catch (error: any) {
		const statusCode = error.response.status;
		return { status: statusCode, data: null };
	}
};
export default RegisterAction;
