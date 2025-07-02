import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyContextProvider } from "@/context/MyContext";
import servicesDataArray from "@/utilities/servicesData";
import membersDataArray from "@/utilities/memberData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});








// pull out just the course names and instructor names
const courseNames = servicesDataArray.map(s => s.name);
const instructorNames = membersDataArray.map(m => m.name);
const DOMAIN = 'https://ssiofficial.vercel.app/';


// build a single metas object
export const metadata = {
  title: "Syed Software Institute | Bannu’s Premier IT Academy",
  description: `Hands‑on training in ${courseNames.slice(0, 3).join(', ')} and more — led by experts like ${instructorNames.slice(0, 2).join(' & ')}. Join 1000+ learners in our modern labs.`,
  keywords: [
    ...courseNames,
    ...instructorNames.map(n => n.split(' ')[0]),  // first names for diversity
    "Bannu IT training",
    "Railway Road SSI"
  ],
  authors: [
    { name: "Syed Software Institute", url: DOMAIN }
  ],
  openGraph: {
    title: "Syed Software Institute – IT Courses & Expert Instructors",
    description: `Transform your career with ${courseNames.join(', ')}. Learn from ${instructorNames.join(', ')}.`,
    url: DOMAIN,
    siteName: "Syed Software Institute",
    images: [{
      url: `${DOMAIN}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "SSI Campus"
    }],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "SSI – Courses in " + courseNames.slice(0, 4).join(', '),
    description: `Expert-led ${courseNames.length} courses. Instructors: ${instructorNames.join(', ')}.`,
    images: [`${DOMAIN}/twitter-card.jpg`],
    site: "@SyedSoftwareInst",
    creator: "@SyedSoftwareInst"
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large"
  }
};















export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyContextProvider>
          {children}
        </MyContextProvider>

      </body>
    </html>
  );
}
