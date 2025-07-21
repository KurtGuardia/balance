import React from 'react'
import '../styles/process.scss'
import { motion } from 'framer-motion'
import img from '../imgs/plato.jpg'

const hoverAnimation = {
  whileHover: { y: '-3px' },
}

export default function Process() {
  return (
    <div className='process' id='process'>
      <h2>Proceso de atención</h2>
      <p className='pill'>
        Un proceso de 8 semanas en el que te acompaño a
        sanar tu digestión, liberarte de la hinchazón y
        reconectar con tu bienestar físico y emocional —
        desde la <b>Nutrición Funcional Integrativa</b> y la
        conexión <b>Mente-Cuerpo</b>
      </p>

      <div className='process_content'>
        <img
          src={img}
          alt='Delicioso y nutritivo plato de muestra'
        />
        <span>
          <h4>Trabajamos juntas con:</h4>
          <ul className='process_list'>
            <motion.li
              className='process_list-item'
              {...hoverAnimation}
            >
              🌀 Evaluación completa de tus síntomas,
              alimentación, hábitos y emociones
            </motion.li>
            <motion.li
              className='process_list-item'
              {...hoverAnimation}
            >
              🥗 Guía de alimentación personalizada (listas
              de alimentos, porciones sugeridas, menús,
              recetas y más)
            </motion.li>
            <motion.li
              className='process_list-item'
              {...hoverAnimation}
            >
              🧠 Herramientas mente-cuerpo: coaching, PNL,
              hipnosis y mindfulness
            </motion.li>
            <motion.li
              className='process_list-item'
              {...hoverAnimation}
            >
              🌿 Apoyos naturales y estrategias para regular
              tu sistema digestivo y nervioso.
            </motion.li>
            <motion.li
              className='process_list-item'
              {...hoverAnimation}
            >
              💬 Seguimiento semanal y acompañamiento por
              WhatsApp.
            </motion.li>
            <motion.li
              className='process_list-item'
              {...hoverAnimation}
            >
              📘 Materiales prácticos: guías, meditaciones y
              ejercicios.
            </motion.li>
          </ul>
        </span>
      </div>

      <div className='process_cta'>
        <span>
          Agenda una <b>llamada gratuita de valoración</b>,
          conversamos sobre tu caso y te cuento cómo podemos
          trabajar juntas.
        </span>
        <motion.a
          whileHover={{
            color: '#eeddc9',
            transition: {
              duration: 0.25,
              ease: 'easeInOut',
            },
          }}
          href='https://wa.me/34634150027?text=Hola Victoria,%20me%20interesa%20el%20servicio%20de%20nutrición%20integrativa%20que%20ofreces,%20quisiera%20agendar%20una%20valoración%20gratuita,%20por favor:'
          target='_blank'
          rel='noreferrer'
          title='Click y envíame un mensaje en Whatsapp'
          className='conctact_options-whatsapp pill'
        >
          Agenda aquí tu llamada de valoración
        </motion.a>{' '}
        <span>
          Es un espacio para resolver tus dudas y conocer tu
          caso🌷
        </span>
      </div>
    </div>
  )
}
