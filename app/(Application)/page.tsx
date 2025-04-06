import Landing from "@/app/Components/Landing";
import styles from "./page.module.css";
import { Container } from "@mui/material";

export default function Home() {
	return (
		<Container className={styles.page}>
			<Landing />
		</Container>
	);
}
