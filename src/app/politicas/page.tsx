import './politicas.module.css';

export default function Politicas(){
    return(
        <div className={"min-h-screen flex flex-col justify-center items-center bg-primary px-4 py-4 sm:px-8 bg-primary-color"}>
            <h4 className={"text-secondary-font-family text-3xl sm:text-3xl lg:text-4xl text-secondary-color my-2 text-center"}>
                Políticas de compra y consumo
            </h4>
            <hr className="w-full sm:w-2/3 my-4" />
            <p className={"text-secondary-font-family text-base sm:text-lg lg:text-xl max-w-3xl text-justify text-secondary-color"}>
                Bienvenida a Fantasía store, una tienda online especializada en lencería femenina. Estas políticas están diseñadas para garantizar una experiencia de compra segura, transparente y satisfactoria para todas nuestras clientas.Al realizar una compra en nuestra web, aceptas los términos y condiciones aquí descritos.
            </p>
            <ul className="list-disc pl-10 py-6 text-secondary-font-family text-base sm:text-lg lg:text-lg max-w-3xl text-secondary-color">
                <li>Todos los productos publicados en nuestra web están sujetos a disponibilidad.</li>
                <li>Las fotografías son referenciales y pueden tener ligeras variaciones en color según la pantalla del dispositivo.</li>
                <li>Nos reservamos el derecho de actualizar precios, descripciones y existencias sin previo aviso.</li>
                <li>Los precios están expresados en pesos colombianos e incluyen impuestos si corresponde.</li>
                <li>Aceptamos pagos mediante nuestra pasarela de compra, incluyendo PSE, Tarjetas de Crédito y Tarjetas Débito.</li>
                <li>El pedido será procesado una vez confirmado el pago.</li>
                <li>Realizamos envíos a todo el país a través de Interrapidísimo.</li>
                <li>Los tiempos de entrega varían según tu ubicación.</li>
                <li>Una vez despachado el pedido, recibirás un número de seguimiento o guía.</li>
                <li>No nos hacemos responsables por retrasos atribuibles a la empresa de envío.</li>
                <li>Por tratarse de prendas íntimas,<strong> no se aceptan devoluciones ni cambios </strong>, salvo en los siguientes casos:
                    <ul className='list-disc pl-15 mt-2'>
                        <li>Producto defectuoso de fábrica.</li>
                        <li>Error en el modelo o talla enviado.Y el producto debe devolverse en las mismas condiciones de envío con etiquetas y empaque original.</li>
                    </ul>
                </li>
                <li>Para gestionar un reclamo, escríbenos dentro de las 48 horas siguientes a recibir tu pedido, adjuntando fotos del producto y número de guía y orden.</li>
                <li>Toda la información proporcionada por el cliente será tratada de forma confidencial.</li>
                <li>No compartimos ni vendemos tus datos a terceros.</li>
                <li>Utilizamos tus datos exclusivamente para procesar tus pedidos y ofrecer una mejor experiencia de compra.</li>
            </ul>
        </div>
    );
}
