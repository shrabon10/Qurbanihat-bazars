import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "QurbaniHat | Livestock Booking Platform",
  description: "A modern livestock marketplace for Qurbani cows and goats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
