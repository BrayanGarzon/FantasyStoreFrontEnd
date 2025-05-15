import styles from './vision.module.css';

export default function Mision(){
    return(
        <div className={"min-h-screen flex flex-col items-center bg-primary px-4 sm:px-8 ${styles['bg-primary-color']}"}>
            <h4 className={"${styles['text-secondary-font-family']} text-3xl sm:text-3xl lg:text-4xl ${styles['text-secondary-color']} my-2 text-center"}>
                Visión
            </h4>
            <hr className="w-full sm:w-2/3 my-4" />
            <p className={"${styles['text-secondary-font-family']} text-base sm:text-lg lg:text-xl max-w-3xl text-center ${styles['text-secondary-color']}"}>
                En el 2035 queremos ser una marca líder en el mercado de la lencería femenina a nivel nacional, reconocida por ofrecer calidad y empoderar a las mujeres a través de prendas íntimas que fusionan sensualidad, comodidad y estilo. En Fantasía Store soñamos con inspirar e irradiar confianza y autoestima, promoviendo una belleza diversa, real y segura de sí misma.
            </p>
        </div>
    );
}
