import styles from './mision.module.css';

export default function Mision(){
    return(
        <div className={"min-h-screen flex flex-col items-center bg-primary px-4 sm:px-8 ${styles['bg-primary-color']}"}>
            <h4 className={"${styles['text-secondary-font-family']} text-3xl sm:text-3xl lg:text-4xl ${styles['text-secondary-color']} my-2 text-center"}>
                Misión
            </h4>
            <hr className="w-full sm:w-2/3 my-4" />
            <p className={"${styles['text-secondary-font-family']} text-base sm:text-lg lg:text-xl max-w-3xl text-center ${styles['text-secondary-color']}"}>
                En Fantasía Store, queremos resaltar la sensualidad natural de cada mujer a través de nuestras prendas que inspiran seguridad, confianza y comodidad, resaltando el cuerpo femenino en todas sus formas; queremos que cada mujer que vista nuestra lencería se sienta empoderada, auténtica y completamente conectada con su feminidad.
            </p>
        </div>
    );
}
