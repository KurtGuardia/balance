import React from 'react'
import '../styles/process.scss'
import { motion } from 'framer-motion'

export default function Process() {
  return (
    <div className='process' id='process'>
      <h2 className='process_title'>
        Proceso de atención y enfoque integrativo
      </h2>
      <p className='process_text'>
        Mi enfoque se basa en el método de Nutrición
        Emocional, un enfoque holístico que evalúa y trabaja
        sobre cuatro <b>pilares fundamentales para tu salud:
        físico, mental, emocional y espiritual.</b> Te acompaño
        en un proceso de transformación de 3 meses, donde
        evaluaremos cada uno de estos aspectos para crear un
        plan de acción personalizado que se ajuste a tus
        necesidades y objetivos. Durante este proceso,
        aprenderás a <b>nutrir tu cuerpo de manera consciente</b>,
        adaptando tu alimentación a lo que realmente
        necesitas para <b>sentirte bien</b>. Combinaremos las
        sesiones con técnicas de coaching y Programación
        Neurolingüística (PNL), entre muchas otras, lo que
        te permitirá cambiar patrones y hábitos que han
        estado interfiriendo con tu bienestar. Este enfoque
        no solo se centra en el "qué" y el "cómo" comer,
        sino que también aborda las emociones y creencias
        que rodean tu relación con la comida, tu salud y tu
        cuerpo. Mi objetivo es <b>proporcionarte las
        herramientas necesarias para que logres un bienestar
        duradero</b>, empoderándote para tomar decisiones que
        favorezcan tu salud en todos los niveles.
        <br />
        <br />
        Da click <motion.a
          initial={{
            borderBottom: '2px solid transparent',
          }}
          whileHover={{
            borderBottom: '2px solid #a38b93',
            color: '#a38b93',
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
        </motion.a> para agendar una llamada gratuita y comenzar tu
        camino hacia tu mejor salud.

      </p>
    </div>
  )
}
