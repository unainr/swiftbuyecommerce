import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import ShoppingCartModel from "@/components/ShoppingCartModel";
import NextTopLoader from 'nextjs-toploader';
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: 'SwiftBuy | Premium Fashion Store',
  description: 'Discover the latest fashion trends in mens and womens clothing. Shop premium quality apparel, accessories and more.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
						<NextTopLoader
							color="#136fe8"
							height={2}
							crawlSpeed={50}
							speed={1000}
							showSpinner={false}
						/>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<Providers>
							<ShoppingCartModel/>
						{children}
						</Providers>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
