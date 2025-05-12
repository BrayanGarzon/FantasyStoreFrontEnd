import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        
        {/* Sección 1: Logo y Descripción */}
        <div>
          <h3 className="text-3xl font-bold text-primary">Fantasía Store</h3>
          <p className="mt-2 text-sm">
            Pariatur Lorem dolor non culpa sint cillum dolore ipsum est. Reprehenderit adipisicing irure nostrud nostrud et et in occaecat consectetur. Labore sit magna tempor in duis cillum sunt. Tempor deserunt excepteur qui nulla incididunt nostrud fugiat tempor aliqua esse magna. Consectetur duis exercitation eu et exercitation nostrud ipsum.
          </p>
        </div>
        
        {/* Sección 2: Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold text-primary">Síguenos</h4>
          <ul className="mt-4 gap-2 display flex flex-row">
            <li>
              <a href="https://www.facebook.com/share/1H2iKKDCHF/" className="hover:text-white w-20 h-20" target='_blank'>
                
                <FontAwesomeIcon icon={faFacebook} width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/store_fantasia?igsh=MTJ4aW1tZmx2eW9jcA==" className="hover:text-white" target='_blank'>
                <FontAwesomeIcon icon={faInstagram} width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="http://wa.me/+573125769121" className="hover:text-white" target='_blank'>
                <FontAwesomeIcon icon={faWhatsapp} width={40} height={40} />
              </a>
            </li>
          </ul>
        </div>
        
            {/* Sección 3: Politicas */}
        <div>
          <h4 className="text-lg font-semibold text-primary">Políticas de privacidad</h4>
          <ul className="mt-4  space-x-4">
            <li><a href="#" className="hover:text-primary">Facebook</a></li>
            <li><a href="#" className="hover:text-primary">Twitter</a></li>
            <li><a href="#" className="hover:text-primary">Instagram</a></li>
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



