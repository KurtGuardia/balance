import React from 'react'
import { motion } from 'framer-motion'
import '../styles/services.scss'

const hoverAnimation = {
  whileHover: { y: '-15px' },
}

const services = [
  {
    title: 'Metabolismo',
    text: 'Si tienes <b>alguna condición o enfermedad </b> que deseas mejorar: Sobre peso, Diabetes, resistencia a la insulina, Síndrome de Ovario Poliquístico (SOP), Hipertensión, triglicéridos y/o colesterol elevado entre otras.',
  },
  {
    title: 'Aparato Digestivo',
    text: 'Si deseas <b>mejorar síntomas</b> como: Hinchazón y/o distensión abdominal, inflamación, constipación, sensación de pesadez, acidez o reflujo.',
  },
  {
    title: 'Habitos y estilo de Vida Saludable',
    text: 'Si lo que estas buscando es <b>mejorar tus hábitos</b> y estilo de vida estas en el lugar correcto.',
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
