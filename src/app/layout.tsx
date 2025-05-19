'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './globals.css';
import { mainApi } from '../api'; // Asegúrate de que mainApi tenga algo como axios o fetch

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon-clothe.png" />
      </head>
      <body>
        {!isServerReady && (
          <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-center flex-col">
            <div className="text-center mb-4">
              <p className="text-xl font-medium">Encendiendo Servidor</p>
            </div>
              <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-black-400 border-t-transparent"></div>
          </div>
        )}
        <div className='min-h-screen flex flex-col'>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
