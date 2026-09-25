import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Inter, Playpen_Sans } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "700"],
	variable: "--font-inter",
});

const playpenSans = Playpen_Sans({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--font-playpen",
});

export const metadata = {
	title: "Games Shop byAslan",
	description: "The best games at affordable prices",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${inter.variable} ${playpenSans.variable}`}>{children}</body>
		</html>
	);
}
