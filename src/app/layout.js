import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SunCart - Your Summer Essentials",
  description: "Discover the hottest summer trends at SunCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { borderRadius: "8px", background: "#333", color: "#fff" },
          }}
        />
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
