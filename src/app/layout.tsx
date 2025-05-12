import React from 'react';
import Footer from '../components/common/Footer';
import './globals.css';
export default function RootLayout({ children}:Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <title>Fantasy Store</title>
        <meta name="description" content="Tienda de ropa y accersorios"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/icon/favicon-clothe.png" />
      </head>

      <body>
        <div className='min-h-screen flex flex-col'>
          {/* Contenido Principal */}
          <main className='flex-grow'>{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
