import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist_Mono } from "next/font/google";
import FloatingContact from "./components/FloatingContact";
import "./globals.css";

const vietnameseSans = Be_Vietnam_Pro({
  variable: "--font-vietnamese-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tuấn Tú Wedding",
  description: "Makeup Bridal, Wedding Photography và Phóng sự cưới tại Thôn Điện Tân, xã Cư Pui, huyện Krông Bông, tỉnh Đắk Lắk.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-transparent.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${vietnameseSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
