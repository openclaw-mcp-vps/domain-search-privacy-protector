import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainShield — Anonymous Domain Availability Checker",
  description: "Check domain availability without revealing your search history to registrars who might squat your domains."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69719cce-26e2-4934-850b-5e619976198e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
