import '../styles/process.scss'
import { motion } from 'framer-motion'

const hoverAnimation = {
  whileHover: { y: '-3px' },
}
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

export default function Process() {
  return (
    <motion.div
      {...motionProps}
      className='process'
      id='process'
    >
      <h2>Proceso de atención</h2>
      <p className='pill'>
        Un proceso de 8 semanas en el que te acompaño a
        sanar tu digestión, liberarte de la hinchazón y
        reconectar con tu bienestar físico y emocional —
        desde la <b>Nutrición Funcional Integrativa</b> y la
        conexión <b>Mente-Cuerpo</b>
      </p>

      <div className='process_content'>
        <h4>Trabajamos juntas con:</h4>
        <ul className='process_list'>
          <motion.li
            className='process_list-item'
            {...hoverAnimation}
          >
            Evaluación completa de tus síntomas,
            alimentación, hábitos y emociones
          </motion.li>
          <motion.li
            className='process_list-item'
            {...hoverAnimation}
          >
            Guía de alimentación personalizada (listas de
            alimentos, porciones sugeridas, menús, recetas y
            más)
          </motion.li>
          <motion.li
            className='process_list-item'
            {...hoverAnimation}
          >
            Herramientas mente-cuerpo: coaching, PNL,
            hipnosis y mindfulness
          </motion.li>
          <motion.li
            className='process_list-item'
            {...hoverAnimation}
          >
            Apoyos naturales y estrategias para regular tu
            sistema digestivo y nervioso.
          </motion.li>
          <motion.li
            className='process_list-item'
            {...hoverAnimation}
          >
            Seguimiento semanal y acompañamiento por
            WhatsApp.
          </motion.li>
          <motion.li
            className='process_list-item'
            {...hoverAnimation}
          >
            Materiales prácticos: guías, meditaciones y
            ejercicios.
          </motion.li>
        </ul>
      </div>

      <div className='process_cta'>
        <span>
          Agenda una <b>llamada gratuita de valoración</b>,
          conversamos sobre tu caso y te cuento cómo podemos
          trabajar juntas.
        </span>
        <a
          href='https://wa.me/34634150027?text=Hola Victoria,%20me%20interesa%20el%20servicio%20de%20nutrición%20integrativa%20que%20ofreces,%20quisiera%20agendar%20una%20valoración%20gratuita,%20por favor:'
          target='_blank'
          rel='noreferrer'
          title='Click y envíame un mensaje en Whatsapp'
          className='conctact_options-whatsapp pill pill_cta'
        >
          Agenda aquí tu llamada de valoración
        </a>{' '}
        <span>
          Es un espacio para resolver tus dudas y conocer tu
          caso🌷
        </span>
      </div>
    </motion.div>
  )
}
