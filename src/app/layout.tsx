import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "The Blog Sphere",
  description: "One stop solution for latest blogs..",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <div
              style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 9999,
              }}
            >
              <ThemeToggle />
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
