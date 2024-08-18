import { Barlow, Inter, Poppins } from "next/font/google";

export const barlow = Barlow({
  weight: ["400", "600", "500", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
});
