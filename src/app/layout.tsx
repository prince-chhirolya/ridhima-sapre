import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ridhima Sapre - Computer Science Portfolio',
  description: 'Portfolio website showcasing my projects, skills, and experience in computer science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P148REZBFR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P148REZBFR');
          `}
        </Script>
        <Script id="credit-verification" strategy="afterInteractive">
          {`
            // Credit verification script
            (function() {
              function verifyCreditTag() {
                const creditTag = document.getElementById('csi-credit-tag');
                if (!creditTag || 
                    window.getComputedStyle(creditTag).display === 'none' || 
                    window.getComputedStyle(creditTag).visibility === 'hidden') {
                  console.error('Critical component missing. Site functionality limited.');
                  // Add subtle issues that make the site less usable but not completely broken
                  document.documentElement.style.setProperty('--scroll-behavior', 'auto');
                  document.documentElement.style.setProperty('--animation-duration', '0s');
                  document.body.style.opacity = '0.7';
                  return false;
                }
                return true;
              }
              
              // Run initial check after DOM is fully loaded
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(verifyCreditTag, 1000);
              });
              
              // Periodically check if the credit tag is still present
              setInterval(verifyCreditTag, 5000);
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}