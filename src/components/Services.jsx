import { motion } from 'framer-motion'
import '../styles/services.scss'
import Digestion from '../imgs/digestion.webp'
import Intestino from '../imgs/intestino.webp'
import Bienestar from '../imgs/bienestar.jpg'

const hoverAnimation = {
  whileHover: { y: '-3px' },
}

export default function Services() {
  return (
    <div className='services' id='services'>
      <h2>En que puedo ayudarte:</h2>
      <div className='pill pill_wide'>
        Salud digestiva y Microbiota
      </div>
      <div className='services_item'>
        <img
          src={Digestion}
          alt='mujer con hinchazón abdominal'
          className='services_image'
        />
        <div>
          <h4>Si experimentas:</h4>
          <ul className='services_list'>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              Hinchazón abdominal
            </motion.li>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              Inflamación
            </motion.li>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              Estreñimiento
            </motion.li>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              Sensación de pesadez u otros trastornos
              digestivos
            </motion.li>
          </ul>
        </div>
      </div>
      <div className='services_item'>
        <div>
          <h4>Si te han diagnosticado:</h4>
          <ul className='services_list'>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              Intestino irritable
            </motion.li>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              SIBO
            </motion.li>
            <motion.li
              {...hoverAnimation}
              className='services_list-item'
            >
              IMO
            </motion.li>
          </ul>
        </div>{' '}
        <img
          src={Intestino}
          alt='mujer sosteniendo un dibujo de intestino'
          className='services_image'
        />
      </div>
      <p className='services_msg'>
        Puedo ayudarte con mi Método: RecuperarTE
      </p>
      <div className='services_item'>
        <img
          src={Bienestar}
          alt='mujer formando un corazón con sus manos sobre su estómago'
          className='services_image services_image--rounded'
        />
        <p>
          Acompañamiento de 8 semanas para{' '}
          <b>liberarte de la hinchazón</b>, volver a ir al
          baño con <b>regularidad y sentirte más liviana</b>
          , con{' '}
          <b>calma, energía y conexión con tu cuerpo</b> —
          todo desde una alimentación adaptada a ti, tu
          historia y tu bienestar emocional.
        </p>
      </div>
    </div>
  )
}
