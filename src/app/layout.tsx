'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  // Rutas donde NO quieres mostrar Header/Footer
  const hideHeaderFooter = [
    '/mision',
    '/vision',
    '/politicas'
  ];

  const shouldHide = hideHeaderFooter.includes(pathname);

  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <title>Fantasía Store</title>
        <meta name="description" content="Tienda de ropa y accersorios"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F7E9E9" />
        
        
        <link rel="icon" href="/Store_Favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/Store_Favicon.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/Store_Favicon.png" sizes="128x128" type="image/png" />



      </head>

      <body>
        <div className='min-h-screen flex flex-col'>
          {/* Header */}
          {!shouldHide && <Header />}

          {/* Contenido Principal */}
          <main className='flex-grow'>{children}</main>

          {/* Footer */}
          {!shouldHide && <Footer />}
        </div>
      </body>
    </html>
  );
}