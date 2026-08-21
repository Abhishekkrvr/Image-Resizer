import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://realimageresizer.in"),

  title: {
    default: "Real Image Resizer — Photo & Signature Resizer for Indian Forms",
    template: "%s | Real Image Resizer",
  },

  description:
    "Resize, compress and validate photos, signatures and documents for SSC, NEET, JEE, CUET, UPSC, IBPS, Railway and other Indian applications.",

  keywords: [
    "photo resize for government form",
    "signature resize for government form",
    "photo compressor 20kb",
    "photo compressor 50kb",
    "image compressor to exact kb",
    "photo resize for SSC",
    "SSC CGL photo resize",
    "SSC signature resize",
    "NEET photo resize",
    "NEET signature resize",
    "JEE Main photo resize",
    "CUET photo resize",
    "UPSC photo resize",
    "IBPS photo resize",
    "railway photo resize",
    "Indian government form photo resize",
    "image compressor India",
    "HEIC to JPG",
  ],

  authors: [{ name: "Real Image Resizer" }],

  creator: "Real Image Resizer",
  publisher: "Real Image Resizer",

  applicationName: "Real Image Resizer",

  category: "Technology",

  alternates: {
    canonical: "https://realimageresizer.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://realimageresizer.in",
    siteName: "Real Image Resizer",
    title: "Real Image Resizer — Make Your Photo Upload-Ready",
    description:
      "Resize, compress and validate photos, signatures and documents for Indian student and government applications.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Image Resizer — Photo & Signature Tools for Indian Forms",
    description:
      "Make photos, signatures and documents upload-ready for Indian exams and applications.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <meta name="google" content="notranslate" />
      </head>

      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
