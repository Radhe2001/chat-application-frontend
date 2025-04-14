import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.pixabay.com",
			},
		],
	},
	experimental: {
		authInterrupts: true, // ✅ Enable auth interrupts
	},
};

export default nextConfig;
