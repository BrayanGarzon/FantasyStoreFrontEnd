import styles from './politicas.module.css';

export default function Politicas() {
    return (
        <div className={`min-h-screen flex flex-col items-center bg-primary px-6 sm:px-16 ${styles['bg-primary-color']} ${styles['text-secondary-color']}`}>
            <h4 className={`${styles['text-secondary-font-family']} ${styles['heading-primary']}`}>
                Políticas de Compra
            </h4>
            
            <p className={`${styles['text-secondary-font-family']} ${styles['paragraph']}`}>
                Bienvenida a Fantasía Store, una tienda online especializada en lencería femenina. Estas políticas están diseñadas para garantizar una experiencia de compra segura, transparente y satisfactoria para todas nuestras clientas.
            </p>

            <ul className={`${styles['text-secondary-font-family']} ${styles['list']}`}>
                <li className={styles['list-item']}>Todos los productos publicados en nuestra web están sujetos a disponibilidad.</li>
                <li className={styles['list-item']}>Las fotografías son referenciales y pueden tener ligeras variaciones en color según la pantalla del dispositivo.</li>
                <li className={styles['list-item']}>Nos reservamos el derecho de actualizar precios, descripciones y existencias sin previo aviso.</li>
                <li className={styles['list-item']}>Los precios están expresados en [moneda local] e incluyen impuestos si corresponde.</li>
                <li className={styles['list-item']}>Aceptamos pagos mediante tarjeta de crédito/débito, transferencias y otros métodos disponibles.</li>
                <li className={styles['list-item']}>El pedido será procesado una vez confirmado el pago.</li>
                <li className={styles['list-item']}>Realizamos envíos a todo el país a través de Interrapidísimo.</li>
                <li className={styles['list-item']}>Los tiempos de entrega varían según tu ubicación.</li>
                <li className={styles['list-item']}>Una vez despachado el pedido, recibirás un número de seguimiento o guía.</li>
                <li className={styles['list-item']}>No nos hacemos responsables por retrasos atribuibles a la empresa de envío.</li>
            </ul>

            <h2 className={`${styles['text-secondary-font-family']} ${styles['heading-primary']}`}>
                Política de Devoluciones
            </h2>
            <ul className={`${styles['text-secondary-font-family']} ${styles['list']}`}>
                <li className={styles['list-item']}>Por tratarse de prendas íntimas, no se aceptan devoluciones ni cambios, salvo en los siguientes casos:</li>
                <ul className={styles['list']}>
                    <li className={styles['list-item']}>Producto defectuoso de fábrica.</li>
                    <li className={styles['list-item']}>Error en el modelo o talla enviado.</li>
                </ul>
                <li className={styles['list-item']}>El producto debe devolverse en las mismas condiciones de envío, con etiquetas y empaque original.</li>
                <li className={styles['list-item']}>Para gestionar un reclamo, escríbenos dentro de las 48 horas siguientes a recibir tu pedido, adjuntando fotos del producto y número de guía y orden.</li>
            </ul>

            <h2 className={`${styles['text-secondary-font-family']} ${styles['heading-primary']}`}>
                Política de Privacidad
            </h2>
            <p className={`${styles['text-secondary-font-family']} ${styles['paragraph']}`}>
                Toda la información proporcionada por el cliente será tratada de forma confidencial. No compartimos ni vendemos tus datos a terceros. Utilizamos tus datos exclusivamente para procesar tus pedidos y ofrecer una mejor experiencia de compra.
            </p>
        </div>
    );
}
