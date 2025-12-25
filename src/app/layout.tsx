import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { ViewProvider, ViewManager } from "@/components/ViewManager";
import Presentation from "@/components/Presentation";
import PresentationToggle from "@/components/PresentationToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
    title: '1st Choice Roofing & Construction | Houston & Tomball Roofing Experts',
    description: 'Licensed and insured roofing contractors serving Tomball, TX and Greater Houston. Expert roof repair, replacement, and free inspections from 1st Choice Roofing & Construction.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${montserrat.variable} font-sans bg-brand-dark text-white antialiased pb-20 md:pb-0`}>
                <ViewProvider>
                    <PresentationToggle />
                    <ViewManager
                        site={
                            <>
                                {children}
                                <MobileStickyCTA />
                            </>
                        }
                        presentation={<Presentation />}
                    />
                </ViewProvider>
            </body>
        </html>
    );
}
