import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './globals.css';
export default function RootLayout({ children}:Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <Header />
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
