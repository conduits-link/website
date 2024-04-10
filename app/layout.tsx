import { ReactNode } from "react";
import { Lato } from "next/font/google";

import "./globals.css";

export const metadata = {
	title: "Conduit",
	description: "The power of LLMs brought to an interface.",
	openGraph: {
		title: "Conduit",
		description: "The power of LLMs brought to an interface.",
		images: [
			{
				url: "https://www.conduits.link/opengraph.png",
				width: 1200,
				height: 630,
			},
		],
	},
};

const font = Lato({
	weight: ["400", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<head>
				<script
					defer
					src={process.env.NEXT_PUBLIC_VISITOR_ANALYTICS_URL}
					data-website-id={process.env.NEXT_PUBLIC_VISITOR_ANALYTICS_KEY}
				/>
			</head>
			<body className={font.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
