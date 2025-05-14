import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        
        {/* Sección 1: Logo y Descripción */}
        <div className='lg:col-span-2 text-center lg:text-left'>
          <h3 className="text-3xl sm:text-4xl font-bold text-primary">Fantasía Store</h3>
          <p className="mt-2 text-sm">
            En Fantasía store, ofrecemos lencería femenina pensada para adaptarse a tu ritmo de vida, con diseños que combinan elegancia, comodidad y un ajuste perfecto a la sensualidad. Cada prenda está seleccionada para brindarte seguridad, estilo y una sensación única de bienestar.
            Encuentra desde los básicos que necesitas hasta los diseños más sofisticados para ocasiones especiales. Calidad, diseño y buen gusto, todo en un solo lugar.
          </p>
        </div>
        
        {/* Sección 2: Redes Sociales */}
        <div className='text-center lg:text-left'>
          <h4 className="text-lg font-semibold text-primary">Síguenos</h4>
          <ul className="mt-4 gap-2 display flex flex-row justify-center lg:justify-start">
            <li className=''>
              <Link href="https://www.facebook.com/share/1H2iKKDCHF/" className="hover-color-facebook w-20 h-20" target='_blank'>
                <FontAwesomeIcon icon={faFacebook} width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/store_fantasia?igsh=MTJ4aW1tZmx2eW9jcA==" className="hover-color-instagram" target='_blank'>
                <FontAwesomeIcon icon={faInstagram} width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="http://wa.me/+573125769121" className="hover-color-whatsapp" target='_blank'>
                <FontAwesomeIcon icon={faWhatsapp} width={30} height={30} />
              </Link>
            </li>
          </ul>
        </div>
        
            {/* Sección 3: Politicas */}
        <div>
          <h4 className="text-lg font-semibold text-primary">Políticas de privacidad</h4>
          <ul className="mt-4  space-x-4">
            <li><Link href="pages/mision" className="hover:text-primary">Mision</Link></li>
            <li><Link href="pages/vision" className="hover:text-primary">Visión</Link></li>
            <li><Link href="pages/conditions" className="hover:text-primary">Politica de compra y consumo</Link></li>
          </ul>
        </div>

        {/* Sección 3: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-primary">Suscríbete</h4>
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
      <div className="text-center text-secondary text-sm mt-10">
        © 2025 - Fantasía Store. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;



