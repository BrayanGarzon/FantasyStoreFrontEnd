'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation';

import './globals.css';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import WhatsAppFloat from '@/components/common/whatsAppFloat';

import { mainApi } from '../api';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  // Rutas donde NO queremos mostrar Header/Footer
  const hideHeaderFooter = [
    '/mision',
    '/vision',
    '/politicas'
  ];

  // Rutas donde no quieremos mostrar al WhatsApp
  const hideWhatsApp = [
    '/mision',
    '/vision',
    '/politicas'
  ];

  const shouldHideHeaderFooter = hideHeaderFooter.includes(pathname);
  const shouldHideWhatsApp = hideWhatsApp.includes(pathname);

  const [isServerReady, setIsServerReady] = useState(false);

  useEffect(() => {
    const checkServer = async () => {
      try {
        await mainApi.mainPingRetrieve();
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
        <meta name="description" content="Tienda de ropa y accesorios"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F7E9E9" />
        <link rel="icon" href="/Store_Favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/Store_Favicon.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/Store_Favicon.png" sizes="128x128" type="image/png" />
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
        {/*Contenido principal*/}
        <div className='min-h-screen flex flex-col'>
          {!shouldHideHeaderFooter && <Header />}
          <main className='flex-grow'>{children}</main>
          {!shouldHideHeaderFooter && <Footer />}
        </div>

        {/* Botón de WhatsApp - Fuera del contenedor flexible */}
        {!shouldHideWhatsApp && <WhatsAppFloat/>}
      </body>

    </html>
  );
}
