import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Jonli Vebinar - Dangasalikdan halos bo’lishning 3 ta yo’li",
  description: "2,3,4-sentabr, soat 20:00 da bo'lib o'tadigan jonli vebinar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        {/* Domain verification */}
        <meta
          name="facebook-domain-verification"
          content="2utcfwt5qtlms2ka8w93itx2po5uag"
        />

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '647005224750459');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=647005224750459&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
