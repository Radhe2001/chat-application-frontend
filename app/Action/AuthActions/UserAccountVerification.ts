"use server";
import axios from "axios";

const UserAccountVerification = async ({
	token,
	status,
}: {
	token: string | null;
	status: boolean;
}): Promise<{ status: number; data: string | null }> => {
	const registrationInput = {
		verificationToken: token,
		taskType: status ? "accountAuth" : "accountDeauth",
	};
	try {
		const response = await axios.post(
			"http://localhost:5216/api/v1/user/User/accountVerification",
			registrationInput
		);
		const statusCode = response.status;
		return { status: statusCode, data: response.data };
	} catch (error: any) {
		const statusCode = error.response.status;
		return { status: statusCode, data: null };
	}
};

export default UserAccountVerification;
