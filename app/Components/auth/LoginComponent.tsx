"use client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import LoginLogo from "../../../public/auth/loginPage_logo.png";
import NextLink from "next/link";
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
import { useAppDispatch } from "@/app/redux/store";
import { toggleThemeMode } from "@/app/redux/Slices/theme/themeSlice";
import { useState } from "react";
import UserLogin from "@/app/Action/AuthActions/UserLogin";
import { useRouter } from "next/navigation";

const LoginComponent = () => {
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [progress, setProgress] = useState(false);
	const [warning, setWarning] = useState({ open: false, message: "" });
	const router = useRouter();
	function handleClick() {
		dispatch(toggleThemeMode());
	}

	const validateCredentials = (): { open: boolean; message: string } => {
		const emailRegex: RegExp =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const passwordRegex: RegExp =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

		if (password === "" && email === "")
			return { open: true, message: "All the fields are required" };
		else if (password === "")
			return { open: true, message: "password required" };
		else if (email === "") return { open: true, message: "email  is required" };
		else {
			if (!emailRegex.test(email)) {
				return {
					open: true,
					message: "Please check if the email is correct",
				};
			}
			if (password.trim().length < 8 || !passwordRegex.test(password)) {
				return {
					open: true,
					message: "Please check if the password is correct",
				};
			}

			return { open: false, message: "" };
		}
	};
	function handleUserLogin() {
		setProgress(true);
		const { open, message } = validateCredentials();
		if (open) {
			setWarning({ open: open, message: message });
			setTimeout(() => {
				setWarning({ open: false, message: "" });
				setProgress(false);
			}, 3000);
			return;
		} else {
			UserLogin({ email, password })
				.then((res) => {
					if (res.status === 200) {
						if (typeof res.data! !== "string" || res.data) {
							localStorage.setItem("token", res.data!.token.toString());
							setProgress(false);
							router.push("/chat");
						}
					} else {
						let message: string;
						if (res.status === 400) message = "Invalid User credentials";
						else if (res.status === 404)
							message = "User not found with the email or password";
						else message = "Oops!! some unexpected error occured";
						setWarning({
							open: true,
							message: message,
						});
						setTimeout(() => {
							setWarning({ open: false, message: "" });
						}, 3000);
						setProgress(false);
					}
				})
				.catch((err) => {
					setWarning({
						open: true,
						message: "Oops!! some unexpectd error occured.",
					});
					setTimeout(() => {
						setWarning({ open: false, message: "" });
					}, 3000);
					setProgress(false);
				});
		}
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
					Login
				</Typography>
				<Stack sx={{ marginTop: 4 }} gap={1}>
					<TextField
						required
						id="outlined-basic"
						label="Email"
						type="email"
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
						type="password"
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
							if (!progress) handleUserLogin();
						}}>
						{progress ? <CircularProgress color="info" size={25} /> : "Log in"}
					</Button>
					<Link
						href="/auth/forgotPassword"
						component={NextLink}
						textAlign={"center"}
						marginTop={2}>
						Forgot password?
					</Link>
					<Stack
						direction={"row"}
						gap={1}
						sx={{ display: "flex", placeContent: "center" }}>
						<Typography>Don&apos;t have an account?</Typography>
						<Link href="/auth/register" component={NextLink}>
							Sign up
						</Link>
					</Stack>
				</Stack>
				<Collapse in={warning.open} sx={{ marginTop: 2 }}>
					<Alert severity="warning" variant="outlined" sx={{ mb: 2 }}>
						{warning.message}
					</Alert>
				</Collapse>
			</Stack>
		</Container>
	);
};
export default LoginComponent;
