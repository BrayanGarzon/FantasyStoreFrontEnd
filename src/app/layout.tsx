'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation';

import './globals.css';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

import { mainApi } from '../api';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  // Rutas donde NO quieres mostrar Header/Footer
  const hideHeaderFooter = [
    '/mision',
    '/vision',
    '/politicas'
  ];

  const shouldHide = hideHeaderFooter.includes(pathname);

  const [isServerReady, setIsServerReady] = useState(false);

  useEffect(() => {
    const checkServer = async () => {
      try {
        await mainApi.mainPingRetrieve(); // Cambia esto por tu endpoint de prueba
        setIsServerReady(true);
      } catch (error) {
        console.log('Servidor no disponible, reintentando en 3s...');
        setTimeout(checkServer, 3000);
      }
    };

    checkServer();
  }, []);

  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <title>Fantasía Store</title>
        <meta name="description" content="Tienda de ropa y accesorios" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F7E9E9" />
        
        
        <link rel="icon" href="/Store_Favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/Store_Favicon.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/Store_Favicon.png" sizes="128x128" type="image/png" />



        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon-clothe.png" />
      </head>
      <body>
        {!isServerReady && (
          <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-center flex-col">
            <div className="text-center mb-4">
              <p className="text-xl font-medium">Estableciendo Conexion Con El  Servidor</p>
            </div>
              <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-black-400 border-t-transparent"></div>
          </div>
        )}
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