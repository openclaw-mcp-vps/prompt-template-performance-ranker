import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptRanker – Rank AI Prompt Templates by Business Metrics",
  description: "Track prompt performance across AI providers. Rank templates by conversion rates, user satisfaction, and cost efficiency."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d995132c-54cd-43cb-91dc-c0887499c1dc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
