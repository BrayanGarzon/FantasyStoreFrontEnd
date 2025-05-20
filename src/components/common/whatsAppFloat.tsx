import React from "react";
import styles from './WhatsApp.module.css';  // Importa correctamente los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const whatsappNumber = '573125769121';
const defaultMessage = 'Hola, quiero más información sobre sus productos';
const whatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

const WhatsAppFloat = () => {
  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Chatea por WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
    </a>
  );
};

export default WhatsAppFloat;

