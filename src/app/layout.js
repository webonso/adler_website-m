import './globals.css';
import Footer from '@/components/Footer';
import CommonLayout from '@/components/CommonLayout';
import AuthProvider from '../context/AuthProvider';
import { B612, Average, Averia_Libre } from "next/font/google";

const averia_libre = Averia_Libre({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  display: "swap",
  variable: "--font-averia-libre",
});

      
const average = Average({
  subsets: ["latin"],
  weight: '400',
  style: ['normal'],
  display: "swap",
  variable: '--font-average',
 
});

const b612 = B612({
  subsets: ["latin"],
  weight: ['400', '700' ],
  display: "swap",
  variable: "--font-b612",
});


// export const metadata = {
//   metadataBase: new URL(siteMetadata.siteUrl),
//   title: {
//     template: `%s | ${siteMetadata.title}`,
//     default: siteMetadata.title, // a default is required when creating a template
//   },
//   description: siteMetadata.description,
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: siteMetadata.siteUrl,
//     siteName: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//   },
// };

export const metadata = {
  title: {
    default: 'HomePage - Adler Website',
    template: '%s | Adler - A travel Website',
  },
  description: 'Book your next available Flight for easy route',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" 
     className={`
   
     `}>
      <body>
      <AuthProvider>
          <CommonLayout>
            <main>{children}</main>
          </CommonLayout>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
 // ${averia_libre.variable} ${average.variable} ${b612.variable}