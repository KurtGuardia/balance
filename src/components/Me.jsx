import '../styles/me.scss'
import Integrativa from './Integrativa'
import vic from '../imgs/Victoria.jpg'
import firma from '../imgs/firma.png'
import PNIE from '../imgs/PNIE.webp'
import microbiota from '../imgs/microbiota.webp'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Me() {
  const [aboutMeOpen, setAboutMeOpen] = useState(false)
  const [aboutNutrOpen, setAboutNutrOpen] = useState(false)

  return (
    <div className='me' id='me'>
      <div className='me_presentation'>
        <div className='me_presentation_picture'>
          <motion.img
            className='picture'
            initial={{ y: '50%', opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1,
              opacity: {
                duration: 3,
              },
            }}
            src={vic}
            alt='Foto de Victoria Espada'
          />
          <motion.img
            className='firma'
            initial={{ y: '50%', opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              opacity: {
                duration: 3,
              },
            }}
            src={firma}
            alt='Firma de Victoria Espada'
          />
        </div>
        <div className='me_presentation_msg'>
          <h2>Sobre mí</h2>
          <p className='me_presentation_msg-quote'>
            “Estoy aquí para acompañarte a recuperar tu
            digestión y volver a habitar tu cuerpo con calma
            y confianza.” 🤍
          </p>
          <ul className='me_presentation_msg-text'>
            <li>Lic. Nutrición y Dietética</li>
            <li>MSc. Microbiota y probióticos</li>
            <li>Esp. Nutrición Emocional</li>
            <li>Certif. PNIE</li>
          </ul>
        </div>
      </div>
      <div className='me_content'>
        <p
          className='me_content-title'
          onClick={() => setAboutMeOpen(!aboutMeOpen)}
          onKeyDown={() => setAboutMeOpen(!aboutMeOpen)}
          role='button'
          tabIndex={0}
        >
          Conoce más sobre mí
        </p>
        {aboutMeOpen && (
          <>
            <p className='me_content-text'>
              Estudié Nutrición y Dietética ya que considero
              que la Nutrición es la base fundamental de la
              salud, tanto física como mental. Siempre me ha
              gustado entregar una atención personalizada de
              acuerdo con las características de cada
              paciente, sin embargo, sentía que faltaban
              piezas fundamentales para un
              <b>
                {' '}
                entendimiento más profundo de la salud;{' '}
              </b>{' '}
              es así como decidí formarme en dos
              apasionantes áreas, la
              <b> psico-neuro-inmuno-endocrinología</b>y la{' '}
              <b> microbiota intestinal </b>, que son clave
              y que están muy relacionadas con el estado de
              salud de cualquier persona
            </p>
            <div className='me_areas'>
              <div className='me_areas_area'>
                <p className='me_areas_area-title'>
                  La Psiconeuroinmunoendocrinología (PNIE):
                </p>
                <img src={PNIE} alt='PNIE ciclo' />
                <p className='me_areas_area-text'>
                  Es la ciencia que estudia la comunicación
                  entre nuestros procesos psicológicos y los
                  sistemas que mantienen el equilibrio
                  nuestro organismo: El sistema nervioso, el
                  endocrino y el inmune. De este campo nacen
                  las Terapias Mente-Cuerpo, intervenciones
                  que emplean diferentes técnicas para
                  potenciar la capacidad de la mente para
                  afectar la función corporal. <br />
                  Esta rama de la salud está estrechamente
                  relacionada con otra de las áreas en las
                  que decidí formarme; la{' '}
                  <b>microbiota intestinal</b> .
                </p>
              </div>
              <div className='me_areas_area'>
                <p className='me_areas_area-title'>
                  La Microbiota intestinal:
                </p>

                <img src={microbiota} alt='PNIE ciclo' />
                <p className='me_areas_area-text'>
                  La microbiota intestinal desempeña un
                  papel crucial en nuestra salud y
                  bienestar, ya que además de influir en la
                  función digestiva y la absorción de
                  nutrientes, también está en comunicación
                  con el sistema inmunológico, influye en el
                  metabolismo y en la producción de
                  neurotransmisores siendo un factor clave
                  en el estado de salud físico, mental y
                  emocional, pilares fundamentales del
                  bienestar de todo ser humano.
                </p>
              </div>
            </div>
            <p className='me_content-text'>
              El combinar e integrar la nutrición con estas
              áreas nos da la posibilidad de abordar la
              salud de una manera<b> holística </b>
              apoyándonos en una alimentación y estilo de
              vida<b> consciente</b>. Consciente con
              nosotros mismos y con nuestro entorno. Este es
              el enfoque con el que me gustar brindar mis
              servicios y que en Nutrición se lo conoce
              como:
            </p>
          </>
        )}

        <p
          className='me_content-title'
          onClick={() => setAboutNutrOpen(!aboutNutrOpen)}
          onKeyDown={() => setAboutNutrOpen(!aboutNutrOpen)}
          role='button'
          tabIndex={0}
        >
          Conoce más sobre Nutrición Funcional Integrativa
        </p>
        {aboutNutrOpen && <Integrativa />}
      </div>
    </div>
  )
}
