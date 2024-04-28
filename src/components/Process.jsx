import React, { useState } from 'react'
import '../styles/process.scss'
import { motion } from 'framer-motion'

export default function Process() {
  const [openStep, setOpenStep] = useState({})

  const steps = [
    {
      title: 'Primera Consulta:',
      text: 'Llegará a tu correo un enlace para conectarnos por Videollamada, la cual tendrá una duración de 45 minutos a una hora, donde evaluaremos tus hábitos alimentarios, estado emocional-mental, estilo de vida, tus gustos y preferencias entre otras cosas. También revisaremos objetivos en base a tu caso.',
    },
    {
      title: 'Desarrollo de tu plan personalizado:',
      text: 'De acuerdo a tus necesidades elaboraré tu plan alimentario con recomendaciones de estilo de vida y recetas, incluiré técnicas de relajación y manejo de estrés además de suplementación si es necesaria.',
    },
    {
      title: 'Entrega del Plan:',
      text: 'Una semana después de la primera consulta, tendremos una nueva videollamada donde te compartiré tu plan alimentario con las recomendaciones mencionadas. Después te enviaré todo el material a tu correo electrónico. Cualquier duda que tengas puedes escribirme al correo: balancenutricionintegrativa@gmail.com',
    },
    {
      title: 'Consulta de Seguimiento:',
      text: 'Dos semanas después evaluaremos como te sientes, tu adherencia al plan alimentario y a las recomendaciones de estilo de vida, si es necesario haremos modificaciones.',
    },
  ]

  const toggleStep = (index) => {
    setOpenStep((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  return (
    <div className='process' id='process'>
      <h2 className='process_title'>El proceso</h2>
      <ul>
        {steps.map((step, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            key={index}
            onClick={() => toggleStep(index)}
            className={
              openStep[index]
                ? 'process_step box'
                : 'process_step'
            }
          >
            <h3 className='process_step-title'>
              <span className='process_step-title-num'>
                {index + 1}
              </span>
              {step.title}
            </h3>
            {openStep[index] && (
              <p
                className='process_step-text'
                dangerouslySetInnerHTML={{
                  __html: step.text,
                }}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
