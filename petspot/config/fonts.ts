import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Nunito as FontRounded,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontRounded = FontRounded({
  subsets: ["latin"],
  variable: "--font-rounded",
  weight: ["400", "600", "700"],
});
