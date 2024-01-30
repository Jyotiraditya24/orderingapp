import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Order Food",
  description: "this is a food ordering app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main className="max-w-4xl mx-auto border">
        <body className={inter.className}>{children}</body>
      </main>
    </html>
  );
}
