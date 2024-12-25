import type { Metadata } from "next";
import "./globals.css";
import SessionProviderWrapper from "@/wrappers/SessionProvider";
import ThemeProvider from "@/wrappers/ThemeProvider";
import { Plus_Jakarta_Sans } from "next/font/google";
import QueryClientWrapper from "@/wrappers/QueryClientWrapper";
import { Toaster } from "@/components/shadcn/sonner";

const geistSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axora",
  description: "Your Ai Powered SAAS application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={`${geistSans.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Toaster />
            <QueryClientWrapper>{children}</QueryClientWrapper>
          </ThemeProvider>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
