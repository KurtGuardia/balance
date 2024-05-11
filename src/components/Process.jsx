import React, { useState } from 'react'
import '../styles/process.scss'
import { motion } from 'framer-motion'
import { ReactComponent as Dropdown } from '../imgs/dropdown.svg'

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
      {/* <ul>
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
              <span className='process_step-title-svg'>
                <Dropdown />
              </span>
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
      </ul> */}
      <p className='process_text'>
        Te acompaño durante 3 meses en un proceso de
        transformación, enseñándote la mejor manera de
        alimentarte de acuerdo a tus necesidades y
        trabajando en la psicología de la alimentación,
        proporcionándote las herramientas para lograr un
        bienestar duradero. <br />
        <br />
        Si quieres comentar tu caso has click{' '}
        <motion.a
          initial={{
            borderBottom: '2px solid transparent',
          }}
          whileHover={{
            scale: 1.05,
            borderBottom: '2px solid #92A28E',
            color: '#92A28E',
            transition: {
              duration: 0.25,
              ease: 'easeInOut',
            },
          }}
          href='https://wa.me/34634150027?text=Hola Victoria,%20me%20interesa%20el%20servicio%20de%20nutrición%20integrativa%20que%20ofreces,%20quisiera%20lo%20siguiente:
'
          target='_blank'
          rel='noreferrer'
          title='Click y envíame un mensaje en Whatsapp'
          className='conctact_options-whatsapp'
        >
          aquí.
        </motion.a>
      </p>
    </div>
  )
}
