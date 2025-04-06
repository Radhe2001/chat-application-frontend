"use client";
import styles from "@/app/(Application)/page.module.css";
import Image from "next/image";
import LoginLogo from "../../../../public/auth/loginPage_logo.png";
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
import { useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [progress, setProgress] = useState(false);
	const [warning, setWarning] = useState({ open: false, message: "" });

	const [reseted, setReseted] = useState(false);
	function handleResetPassword() {
		setProgress(true);
		const { open, message } = validateCredentials();

		if (open) {
			setWarning({ open: open, message: message });
			setTimeout(() => {
				setWarning({ open: false, message: "" });
				setProgress(false);
			}, 3000);
			return;
		}
		setReseted(true);
	}

	const validateCredentials = (): { open: boolean; message: string } => {
		const emailRegex: RegExp =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if (email === "") return { open: true, message: "email  is required" };
		else {
			if (!emailRegex.test(email)) {
				return {
					open: true,
					message: "Please check if the email is correct",
				};
			}

			return { open: false, message: "" };
		}
	};

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
					Forgot Password
				</Typography>
				{reseted ? (
					<Stack>
						<Typography
							variant="h6"
							color="info"
							fontWeight={"bold"}
							textAlign={"center"}
							marginTop={4}>
							Reset password mail has been send to your registered e-mail
							account. <br />
							Kindly reset your password from that link.
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
							label="Registered Email"
							type="email"
							variant="outlined"
							sx={{
								width: 500,
							}}
							value={email}
							onChange={(e) => setEmail(e.target.value.trim())}
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
								if (!progress) handleResetPassword();
							}}>
							{progress ? <CircularProgress color="info" size={25} /> : "Reset"}{" "}
						</Button>

						<Stack
							direction={"row"}
							gap={1}
							sx={{ display: "flex", placeContent: "center", marginTop: 4 }}>
							<Typography>Remember password?</Typography>
							<Link href="/auth/login" component={NextLink}>
								Sign in
							</Link>
						</Stack>
						<Collapse in={warning.open} sx={{ marginTop: 2 }}>
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
