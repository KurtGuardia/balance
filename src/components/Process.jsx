import React from 'react'
import '../styles/process.scss'
import { motion } from 'framer-motion'
import img from '../imgs/plato.jpg'

const hoverAnimation = {
  whileHover: { y: '-10px' },
}

export default function Process() {
  return (
    <div className='process' id='process'>
      <h2 className='process_title'>
        Proceso de atención
      </h2>
      <div className='process_content'>
        <p>
          Mi enfoque se basa en el método de Nutrición
          Emocional, un enfoque integrativo que evalúa y
          trabaja sobre cuatro{' '}
          <b>
            pilares fundamentales para tu salud: físico,
            mental, emocional y espiritual.
          </b>{' '}
          En consulta evaluaremos cada uno de estos aspectos
          para crear un plan de acción personalizado que se
          ajuste a tus necesidades y objetivos.
        </p>
        <div className='process_steps'>
          <img
            src={img}
            alt='Delicioso y nutritivo plato de muestra'
          />
          <div className='process_steps-container'>
            <h3>Procedimiento</h3>
            <motion.div
              {...hoverAnimation}
              className='process_steps_step'
            >
              Te acompaño en un proceso de transformación de
              3 meses, en ese tiempo tendremos 6 sesiones,{' '}
              <b>
                donde aprenderás a nutrir tu cuerpo de
                manera consciente
              </b>
              , adaptando tu <b>alimentación</b> a lo que
              realmente necesitas para <b>sentirte bien</b>.
              Combinaremos las sesiones con técnicas de
              coaching y Programación Neurolingüística
              (PNL), entre muchas otras, lo que te permitirá
              cambiar patrones y hábitos que han estado
              interfiriendo con tu bienestar.
            </motion.div>

            <motion.div
              {...hoverAnimation}
              className='process_steps_step'
            >
              Este enfoque no solo se centra en el
              &quot;qué&quot; y el &quot;cómo&quot; comer,
              sino que también aborda las{' '}
              <b>
                emociones y creencias que rodean tu relación
                con la comida, tu salud y tu cuerpo.
              </b>
            </motion.div>

            <motion.div
              {...hoverAnimation}
              className='process_steps_step'
            >
              Mi objetivo es{' '}
              <b>
                proporcionarte las herramientas necesarias
                para que logres un bienestar duradero
              </b>
              , empoderándote para tomar decisiones que
              favorezcan tu salud en todos los niveles.
            </motion.div>
          </div>
        </div>

        <div className='process_cta'>
         <span>¡Comienza tu camino hacia una mejor salud!</span>
         <span>Haz click</span>
          <motion.a
            whileHover={{
              color: '#eeddc9',
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
            aquí
          </motion.a>{' '}
         <span>para agendar una llamada <i>gratuita.</i></span>
        </div>
      </div>
    </div>
  )
}
