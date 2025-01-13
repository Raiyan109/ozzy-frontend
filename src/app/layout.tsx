import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozzy Fitness - Your AI-Powered Personal Fitness Hub",
  description:
    "Transform your health and wellness with Ozzy Fitness, an AI-driven platform offering personalized workout plans, nutrition guidance, progress tracking, and expert consultations. Achieve your fitness goals seamlessly!",
  keywords: [
    "AI fitness platform",
    "personalized workouts",
    "nutrition plans",
    "health and wellness app",
    "fitness progress tracker",
    "online fitness coach",
    "AI-powered fitness",
    "exercise demonstrations",
    "book fitness consultations",
    "Ozzy Fitness App",
  ],
  // openGraph: {
  //   title: "Ozzy Fitness - AI-Powered Fitness & Wellness",
  //   description:
  //     "Get personalized workout plans, nutrition guidance, and progress tracking tailored to your fitness goals with Ozzy Fitness. Start your wellness journey today!",
  //   url: "https://www.ozzyfitness.com", // Replace with the actual URL
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://www.ozzyfitness.com/assets/og-image.jpg", // Replace with an actual image URL
  //       alt: "Ozzy Fitness Platform - Personalized Fitness",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Ozzy Fitness - Your AI Fitness Partner",
  //   description:
  //     "Achieve your fitness goals with AI-powered recommendations, personalized plans, and progress tracking on Ozzy Fitness.",
  //   images: [
  //     {
  //       url: "https://www.ozzyfitness.com/assets/twitter-image.jpg", // Replace with an actual image URL
  //       alt: "Ozzy Fitness App - AI-Powered Health",
  //     },
  //   ],
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
