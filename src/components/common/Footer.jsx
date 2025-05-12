


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        
        {/* Sección 1: Logo y Descripción */}
        <div>
          <h3 className="text-2xl font-bold text-white">My E-commerce</h3>
          <p className="mt-2 text-sm">
            Vendemos productos de calidad a precios justos. Visítanos para conocer nuestras ofertas.
          </p>
        </div>
        
        {/* Sección 2: Links Rápidos */}
        <div>
          <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#" className="hover:text-white">Productos</a></li>
            <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        
        {/* Sección 3: Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold text-white">Síguenos</h4>
          <ul className="mt-4 flex space-x-4">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
        
        {/* Sección 4: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white">Suscríbete</h4>
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
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 My E-commerce. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;



