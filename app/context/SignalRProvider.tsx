"use client";
import type { AppProps } from "next/app";
import { SignalRProvider } from "../context/SignalRContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SignalRProvider>
            <Component {...pageProps} />
        </SignalRProvider>
    );
}
