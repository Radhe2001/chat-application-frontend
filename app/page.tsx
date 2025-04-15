// app/page.tsx
import Landing from "@/app/Components/auth/Landing";
import styles from "./page.module.css";
import { Container } from "@mui/material";

export default async function Home() {
    return (
        <Container className={styles.page}>
            <Landing />
        </Container>
    );
}
