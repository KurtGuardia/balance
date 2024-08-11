import React from 'react'
import { motion } from 'framer-motion'
import '../styles/services.scss'

const hoverAnimation = {
  whileHover: { y: '-15px' },
}

const services = [
  {
    title: 'Salud Metabólica',
    text: 'Si tienes <b>alguna condición o enfermedad</b> que deseas mejorar: Sobre peso, diabetes, resistencia a la insulina, Síndrome de Ovario Poliquístico (SOP), hipertensión, triglicéridos y/o colesterol elevado, puedo ayudarte.',
  },
  {
    title: 'Aparato digestivo y Microbiota',
    text: 'Si experimentas síntomas como <b>hinchazón y/o distensión abdominal</b>, inflamación, constipación, sensación de pesadez, o <b>SIBO</b>. Puedo ayudarte <b>a través de mi método integrativo</b>, trabajaremos juntxs para <b>mejorar la salud de tu aparato digestivo y equilibrar tu microbiota</b>, devolviendo a tu cuerpo el <b>balance</b>.',
  },
  {
    title: 'Hábitos y estilo de Vida Saludable',
    text: 'Tu bienestar es el resultado de los hábitos que cultivas cada día. Si lo que estas buscando es mejorar tus hábitos alimentarios y estilo de vida, estas en el lugar correcto. Para mejorar tu salud a largo plazo te ofrezco un enfoque con aspectos clave como: <b>Alimentación consciente, relación con la comida, gestión del estrés y emociones, movimiento, sueño reparador e higiene mental</b>.',
  },
  {
    title: 'Nutrición Vegetariana/Vegana',
    text: 'Si has escogido un estilo de vida <b>libre de productos animales</b> y necesitas orientación en que alimentos escoger y como combinarlos para tener un aporte adecuado de nutrientes, esto es para ti.',
  },
]

export default function Services() {
  return (
    <div className='services' id='services'>
      <h2 className='services_title'>
        En que puedo ayudarte:
      </h2>
      <ul>
        {services.map((service, index) => (
          <motion.li
            key={index}
            {...hoverAnimation}
            className='services_service'
          >
            <h3 className='services_service-title'>
              {service.title}
            </h3>
            <p
              className='services_service-text'
              dangerouslySetInnerHTML={{
                __html: service.text,
              }}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
