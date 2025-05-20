import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from'./Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-secondary py-5 text-secondary-color">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-2">
        
        {/* Sección 1: Logo y Descripción */}
        <div className='lg:col-span-2 text-center lg:text-left'>
          <h3 className="text-4xl sm:text-3xl font-bold text-primary-color">Fantasía Store</h3>
          <p className="mt-2 text-sm">
            En Fantasía store, ofrecemos lencería femenina pensada para adaptarse a tu ritmo de vida, con diseños que combinan elegancia, comodidad y un ajuste perfecto a la sensualidad. Cada prenda está seleccionada para brindarte seguridad, estilo y una sensación única de bienestar.
            Encuentra desde los básicos que necesitas hasta los diseños más sofisticados para ocasiones especiales. Calidad, diseño y buen gusto, todo en un solo lugar.
          </p>
        </div>
        
        {/* Sección 2: Redes Sociales */}
        <div className='text-center lg:text-left'>
          <h4 className="text-2xl font-semibold text-primary-color">Síguenos</h4>
          <ul className="mt-4 gap-2 flex justify-center lg:justify-start">
            <li>
              <Link href="https://www.facebook.com/share/1H2iKKDCHF/" target='_blank' className={styles['hover-color-facebook']}>
                <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon}/>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/store_fantasia" target='_blank' className={styles['hover-color-instagram']}>
                <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon}/>
              </Link>
            </li>
            <li>
              <Link href="http://wa.me/+573125769121" target='_blank' className={styles['hover-color-whatsapp']}>
                <FontAwesomeIcon icon={faWhatsapp} className={styles.socialIcon}/>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Sección 3: Políticas */}
        <div className='text-center sm:text-left'>
          <h4 className="text-2xl font-semibold text-primary-color">Políticas de privacidad</h4>
          <ul className="mt-4 space-x-4">
            <li><Link href="/mision" className={styles.textHoverColor}>Misión</Link></li>
            <li><Link href="/vision" className={styles.textHoverColor}>Visión</Link></li>
            <li><Link href="/politicas" className={styles.textHoverColor}>Política de compra y consumo</Link></li>
          </ul>
        </div>

        {/* Sección 4: Newsletter */} 
        <div className='text-center sm:text-left'>
          <h4 className="text-2xl font-semibold text-primary-color">Suscríbete</h4>
          <p className="mt-2 text-sm">
            Recibe las últimas ofertas y noticias.
          </p>
          <form className="mt-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 mb-4"
            />
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      
      {/* Derechos reservados */}
      <div className="text-center text-sm mt-10 text-secondary-color">
        © 2025 - Fantasía Store. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
