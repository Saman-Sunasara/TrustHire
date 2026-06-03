import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrustHire | Workforce Verification Platform India | Powered by Grevoo",
  description:
    "Verify workers, employees, and contractors before hiring. Fast, affordable, and trusted workforce background check and ID verification built for Indian SMEs, factories, and agencies.",
  keywords: [
    "workforce verification India",
    "employee background check",
    "worker verification platform",
    "Aadhaar verification agency",
    "PAN verification business",
    "contractor screening India",
    "Grevoo",
    "Saman Sunasara",
    "TrustHire",
  ],
  authors: [{ name: "Saman Sunasara" }],
  creator: "Saman Sunasara",
  publisher: "Grevoo",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://trusthire.in", // Placeholder domain or production URL
    title: "TrustHire | Verify Before You Hire | Trusted Workforce Verification",
    description:
      "India's background verification platform for blue-collar and white-collar workforce. Identity, address, and reference checks starting at ₹99.",
    siteName: "TrustHire",
    images: [
      {
        url: "https://trusthire.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrustHire - Verify Before You Hire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrustHire | Workforce Verification India",
    description: "Verify workers and employees before hiring. Fast, secure, and affordable reports.",
    images: ["https://trusthire.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <head>
        {/* Structured JSON-LD Data for Local Business / Startup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TrustHire",
              "url": "https://trusthire.in",
              "logo": "https://trusthire.in/logo.png",
              "parentOrganization": {
                "@type": "Organization",
                "name": "Grevoo",
              },
              "founder": {
                "@type": "Person",
                "name": "Saman Sunasara",
                "sameAs": "https://www.linkedin.com/in/saman-sunasara-59072228b/",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7359224131",
                "contactType": "customer service",
                "email": "samansunasara.39@gmail.com",
                "availableLanguage": ["English", "Hindi"],
              },
              "description":
                "TrustHire is India's trusted workforce verification platform helping businesses, contractors, agencies, and SMEs verify workers before hiring.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F8F5]">
        <Navbar />
        <main className="flex-grow pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
