import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"; 
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta", // এখানে ভেরিয়েবল নাম ঠিক আছে
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono", // এটাকে আলাদা নাম দিন
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodhub",
  description:
    "FoodHub delivers fresh, natural and healthy foods directly to your door.",
  icons: {
    icon: "https://i.postimg.cc/XqkYWdJz/975c7d32-4b1e-4e9e-9f1e-bc251d60e468.png",
    shortcut:
      "https://i.postimg.cc/XqkYWdJz/975c7d32-4b1e-4e9e-9f1e-bc251d60e468.png",
    apple:
      "https://i.postimg.cc/XqkYWdJz/975c7d32-4b1e-4e9e-9f1e-bc251d60e468.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
