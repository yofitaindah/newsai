import RootClientLayout from "@/components/shared/layouts/RootClientLayout";
import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.min.css";
import "swiper/css";
import "swiper/css/pagination";
// vs-code-organize-imports-disable-next-line
import "@/scss/style.scss";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		template: "%s | GenAi",
		default: "GenAi",
	},
	description: "AI Based Copywriting and Content Writing Nextjs Landing Page Template",
};

type TRootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: TRootLayoutProps) {
	return (
		<html lang="en" data-bs-theme="dark">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<RootClientLayout>
					<div className="wrapper d-flex flex-column justify-between">{children}</div>
				</RootClientLayout>
				{process.env.SWITCHER_LINK ? (
					<Link
						href={process.env.SWITCHER_LINK}
						className="version-switcher bg-primary position-fixed text-white"
					>
						Light Version
					</Link>
				) : null}
			</body>
		</html>
	);
}
