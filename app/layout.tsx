"use client";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DataProvider, useGlobalContext } from "@/context/store";
import Script from "next/script";

export const metadata: Metadata = {
  title: "shopping store for bebe",
  description: "description of store ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pixel } = useGlobalContext();

  return (
    <html lang="en">
      <body>
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
      </body>

      <Script
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixel}');
fbq('track', 'PageView');
`,
        }}
      />
    </html>
  );
}
