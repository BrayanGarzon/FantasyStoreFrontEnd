'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

import './buttonAtras.css'


interface ButtonAtrasProps {
    to?: string; // ruta a la que redirigir
    children?: React.ReactNode; // contenido del botón
}

const ButtonAtras: React.FC<ButtonAtrasProps> = ({to, children}) => {
    const router = useRouter();

    const handleClick = () => {
        if (to) {
            router.push(to);
        }else {
            router.back();
        }
    };

    return (
        <button 
            onClick={handleClick}
            className='button-atras'
        >
            {children || 'Atrás'}

        </button>
    );
};

export default ButtonAtras;



