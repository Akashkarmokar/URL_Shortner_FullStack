import "./globals.css";
import Navbar from "@/component/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <div className="h-auto w-full overflow-hidden bg-[#171d32]">
                    <Navbar />
                    {children}
                    <Toaster
                        position="top-left"
                        reverseOrder={false}
                        toastOptions={{
                            duration: 3000,
                            style: {
                                background: "#1f2937",
                                color: "#fff",
                            },
                        }}
                    />
                </div>
            </body>
        </html>
    );
}
