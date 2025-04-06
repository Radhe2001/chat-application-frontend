"use client";
import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Landing = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push("/auth/login");
		}, 2000);
	});
	return (
		<main className={styles.main} suppressHydrationWarning={true}>
			<svg
				width="400"
				height="400"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
						<feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#888" />
					</filter>

					<radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#888888" stopOpacity="0.15">
							<animate
								attributeName="stop-opacity"
								values="0.15;0.3;0.15"
								dur="3s"
								repeatCount="indefinite"
							/>
						</stop>
						<stop offset="100%" stopColor="#888888" stopOpacity="0" />
					</radialGradient>
				</defs>

				<rect
					x="40"
					y="40"
					width="120"
					height="120"
					rx="20"
					fill="url(#pulseGradient)"
				/>

				<path
					d="M50 50 H150 A10 10 0 0 1 160 60 V120 A10 10 0 0 1 150 130 H110 L85 150 V130 H50 A10 10 0 0 1 40 120 V60 A10 10 0 0 1 50 50 Z"
					fill="#888888"
					filter="url(#shadow)"
				/>

				<rect x="60" y="70" width="80" height="8" rx="4" fill="#ffffff">
					<animate
						attributeName="width"
						values="0;80;0"
						dur="2.5s"
						repeatCount="indefinite"
					/>
				</rect>

				<rect x="60" y="90" width="60" height="8" rx="4" fill="#ffffff">
					<animate
						attributeName="width"
						values="0;60;0"
						dur="2.5s"
						begin="0.3s"
						repeatCount="indefinite"
					/>
				</rect>

				<rect x="60" y="110" width="40" height="8" rx="4" fill="#ffffff">
					<animate
						attributeName="width"
						values="0;40;0"
						dur="2.5s"
						begin="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
			</svg>
		</main>
	);
};
export default Landing;
