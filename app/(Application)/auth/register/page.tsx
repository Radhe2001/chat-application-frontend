"use client";
import styles from "@/app/(Application)/page.module.css";
import NextLink from "next/link";
import Image from "next/image";
import LoginLogo from "../../../../public/auth/loginPage_logo.png";
import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Collapse,
	Container,
	Link,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
	const router = useRouter();
	const [registered, setRegistered] = useState(false);
	const [warning, setWarning] = useState({ open: false, message: "" });
	const [progress, setProgress] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const validateUserCredentials = (): { open: boolean; message: string } => {
		const emailRegex: RegExp =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const usernameRegex: RegExp = /^[a-zA-Z0-9_]{3,20}$/;
		const passwordRegex: RegExp =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

		if (username === "" && password === "" && email === "")
			return { open: true, message: "All the fields are required" };
		else if (username === "" && password === "")
			return { open: true, message: "username and password are required" };
		else if (username === "" && email === "")
			return { open: true, message: "username and email are required" };
		else if (password === "" && email === "")
			return { open: true, message: "email and password are required" };
		else if (username === "")
			return { open: true, message: "username is required" };
		else if (password === "")
			return { open: true, message: "password required" };
		else if (email === "") return { open: true, message: "email  is required" };
		else {
			if (!usernameRegex.test(username)) {
				return {
					open: true,
					message: "Username must not contain special characters except _",
				};
			}
			if (!emailRegex.test(email)) {
				return {
					open: true,
					message: "Email entered doesn't match the email pattern",
				};
			}
			if (password.trim().length < 8) {
				return {
					open: true,
					message: "Password must atleat 8 characters",
				};
			}
			if (!passwordRegex.test(password)) {
				return {
					open: true,
					message:
						"Password must have one special character,capital and small letter and a number",
				};
			}
			return { open: false, message: "" };
		}
	};

	function handleUserRegistration() {
		setProgress(true);
		const response: { open: boolean; message: string } =
			validateUserCredentials();
		if (response.open) {
			setWarning(response);
			setTimeout(() => {
				setWarning({ open: false, message: "" });
				setProgress(false);
			}, 3000);
			return;
		}
		setRegistered(true);
	}
	function redirectToLogin() {
		router.push("/auth/login");
	}
	return (
		<Container
			className={styles.page}
			sx={{
				display: "flex",
				placeContent: "center",
				alignItems: "center",
			}}>
			<Stack
				sx={{
					// width: 500,
					paddingX: 8,
					paddingBottom: 8,
					elevation: 9,
					boxShadow: 9,
					borderRadius: 4,
				}}>
				<Box
					sx={{
						display: "flex",
						placeContent: "center",
					}}>
					<Image src={LoginLogo} alt="Login" height={150} width={150} />
				</Box>
				<Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
					User Register
				</Typography>
				{registered ? (
					<Stack>
						<Typography
							variant="h6"
							color="info"
							fontWeight={"bold"}
							textAlign={"center"}
							marginTop={4}>
							Verification mail has been send to your registered e-mail account.{" "}
							<br />
							Kindly verify it for successfull user registration.
						</Typography>
						<Button
							variant="contained"
							sx={{
								paddingY: 2,
								fontSize: "medium",
								fontWeight: "bold",
								marginTop: 2,
							}}
							onClick={redirectToLogin}>
							Sign in
						</Button>
					</Stack>
				) : (
					<Stack sx={{ marginTop: 4 }} gap={1}>
						<TextField
							required
							id="outlined-basic"
							label="Username"
							variant="outlined"
							sx={{
								width: 500,
							}}
							value={username}
							onChange={(e) => setUsername(e.target.value.trim())}
						/>

						<TextField
							required
							id="outlined-basic"
							label="Email"
							variant="outlined"
							sx={{
								width: 500,
							}}
							value={email}
							onChange={(e) => setEmail(e.target.value.trim())}
						/>
						<TextField
							required
							id="outlined-basic"
							label="Password"
							variant="outlined"
							sx={{
								width: 500,
							}}
							value={password}
							onChange={(e) => setPassword(e.target.value.trim())}
						/>
						<Button
							variant="contained"
							sx={{
								paddingY: 2,
								fontSize: "medium",
								fontWeight: "bold",
								marginTop: 2,
							}}
							onClick={() => {
								if (!progress) handleUserRegistration();
							}}>
							{progress ? (
								<CircularProgress color="info" size={25} />
							) : (
								"Proceed"
							)}
						</Button>
						<Stack
							direction={"row"}
							gap={1}
							sx={{
								display: "flex",
								placeContent: "center",
								marginTop: 4,
							}}>
							<Typography>Already have an account?</Typography>
							<Link href="/auth/login" component={NextLink}>
								{" "}
								Sign in
							</Link>
						</Stack>
						<Collapse in={warning.open}>
							<Alert severity="warning" variant="outlined" sx={{ mb: 2 }}>
								{warning.message}
							</Alert>
						</Collapse>
					</Stack>
				)}
			</Stack>
		</Container>
	);
};

export default Page;
