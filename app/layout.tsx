import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/ThemesProvider";

export const metadata: Metadata = {
  title: "WaqarCodes",
  description:
    "Hi, I'm Waqar. A Front-End Developer. I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.",
  creator: "Waqar Ahmad",
  verification: {
    google: "r1BffMNTeOAvTrQdTXrrq9fEj1XHUaYQCiI8ltjQ2g8",
  },
  category: "Portfolio",
  keywords: [
    "Waqar codes",
    "Waqar Codes",
    "WaqarCodes",
    "waqarcodes",
    "Waqar Ahmad",
    "Waqar Ahmed",
    "Waqar Ahmad Codes",
    "Waqar Coding",
    "Waqar Codes Portfolio",
    "Codingwithwaqar",
    "Waqar Coder",
  ],
  metadataBase: new URL("https://waqarcodes.tech"),
  openGraph: {
    type: "website",
    locale: "en_US.utf-8",
    title: "WaqarCodes",
    description:
      "Hi, I'm Waqar. A Front-End Developer. I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.",
    url: "https://waqarcodes.tech",
    siteName: "WaqarCodes",
    images: "https://www.waqarcodes.tech/opengraph-image.png",
  },
  authors: [{ name: "Waqar Ahmad", url: "https://waqarcodes.tech" }],
  twitter: {
    card: "summary_large_image",
    site: "@WaqarCodestech",
    title: "WaqarCodes",
    description:
      "Hi, I'm Waqar. A Front-End Developer. I enjoy solving complex problems. Frequently praised as detail-oriented by my peers, I can be relied upon to help your company achieve its goals by providing sustainable and scalable solutions.",
    images: "https://www.waqarcodes.tech/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" >
        <body className="bg-[#F7FAFC] antialiased dark:bg-rich-black">
          <NextTopLoader color="#2C73F8" showSpinner={false} />
          <Navbar />

          {children}

          <Toaster position="bottom-left" />
        </body>
      </ThemeProvider>
    </html>
  );
}
