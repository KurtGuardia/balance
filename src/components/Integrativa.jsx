import '../styles/integrativa.scss'
import img1 from '../imgs/1.jpg'
import img2 from '../imgs/2.jpg'
import img3 from '../imgs/3.png'
import img4 from '../imgs/4.jpg'
import { motion } from 'framer-motion'

const motionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: 'easeIn',
    delay: 0.5,
  },
}
export default function Integrativa() {
  const listItems = [
    {
      imgSrc: img1,
      imgAlt: 'Yoga, Nutricion, bienestar, estilo de vida',
      text: 'Es una forma de abordar la alimentación y el bienestar que considera no solo los aspectos físicos, sino también los emocionales y mentales. Desde esta perspectiva se reconoce que los alimentos no solo nutren nuestro <b>cuerpo</b>, sino también nuestra <b>mente</b> y <b>emociones</b>, examinando cómo las emociones pueden afectar nuestras elecciones alimentarias y viceversa. Y como esto rige nuestro estilo de vida.',
    },
    {
      imgSrc: img2,
      imgAlt: 'Yoga, Nutricion, bienestar, estilo de vida',
      text: 'Busca empoderar a las personas para que tomen el control de su alimentación y estilo de vida, promoviendo cambios duraderos y verdaderos en su salud.',
    },
    {
      imgSrc: img3,
      imgAlt: 'Yoga, Nutricion, bienestar, estilo de vida',
      text: 'Toma en cuenta el estado del sistema digestivo, especialmente el del intestino, ya que para que exista una buena nutrición debe haber una digestión y absorción de nutrientes adecuada. <b>El intestino es considerado como el segundo cerebro</b> y está en constante comunicación con el cerebro a través de un eje conocido como el eje intestino-cerebro, por lo que si cuidamos el intestino también estamos cuidando la salud mental y emocional y lo mismo ocurre a la inversa.',
    },
    {
      imgSrc: img4,
      imgAlt: 'Yoga, Nutricion, bienestar, estilo de vida',
      text: 'Promueve ser conscientes con los alimentos que escogemos y en nuestra actividad diaria, cultivando una <b>relación más profunda con nosotros mismos</b> y el mundo que nos rodea.',
    },
  ]

  return (
    <div className='integrativa' id='integrativa'>
      <motion.h2
        {...motionProps}
        className='integrativa-title'
      >
        Nutrición Funcional Integrativa
      </motion.h2>
      <ul className='integrativa-grid'>
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            {...motionProps}
            className='integrativa-grid-pair'
          >
            <img
              className='integrativa-grid-pair--img'
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <p
              className='integrativa-grid-pair--text'
              dangerouslySetInnerHTML={{
                __html: item.text,
              }}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
