"use client";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DataProvider } from "@/context/store";
import Script from "next/script";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "shopping store for bebe",
  description: "description of store ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pixel, setPixel] = useState("");
  const [load, setLoad] = useState(false);
  const getPixelID = async () => {
    try {
      const response = await fetch("https://ee-mxsk.onrender.com/pixel", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPixel(data.pixel[0].pixel);
      console.log(pixel);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPixelID();
  }, []);

  setTimeout(() => {
    setLoad(true);
  }, 3000);

  return (
    <html lang="en">
      {load && (
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
      )}
      <body>
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
