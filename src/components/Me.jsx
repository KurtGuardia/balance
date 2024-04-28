import '../styles/me.scss'
import vic from '../imgs/Victoria.jpg'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Me() {
  const [pnieOpen, setPnieOpen] = useState(false)
  const [microbiotaOpen, setMicrobiotaOpen] =
    useState(false)

  return (
    <div className='me' id='me'>
      <motion.img
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ scale: 1, rotate: 360, opacity: 1 }}
        transition={{
          duration: 0.5,
          opacity: {
            duration: 2,
          },
        }}
        src={vic}
        alt='Foto de Victoria Espada'
      />
      <div className='me_content'>
        <h2>Sobre mí</h2>
        <p>
          Estudié Nutrición y Dietética ya que considero que
          la Nutrición es la base fundamental de la salud,
          tanto física como mental. <br />
          Siempre me ha gustado entregar una atención
          personalizada de acuerdo con las características
          de cada paciente, sin embargo, sentía que faltaban
          piezas fundamentales para un entendimiento{' '}
          <b> más profundo de la salud;</b> es así como
          decidí formarme en dos<i> apasionantes áreas</i>{' '}
          que son clave y que están muy relacionadas con el
          estado de salud de cualquier persona:
        </p>
        <div className='me_content_area'>
          <h3
            className='me_content_area-title'
            onClick={() => setPnieOpen(!pnieOpen)}
          >
            La Psiconeuroinmunoendocrinología (PNIE):
          </h3>
          {pnieOpen && (
            <p className='me_content_area-text'>
              Es la ciencia que estudia la comunicación
              entre nuestros procesos psicológicos y los
              sistemas que mantienen el equilibrio nuestro
              organismo: el sistema nervioso, el endocrino y
              el inmune. De este campo nacen las Terapias
              Mente-Cuerpo, intervenciones que emplean
              diferentes técnicas para potenciar la
              capacidad de la mente para afectar la función
              corporal. <br />
              Esta rama de la salud está estrechamente
              relacionada con otra de las áreas en las que
              decidí formarme
            </p>
          )}
        </div>
        <div className='me_content_area'>
          <h3
            className='me_content_area-title'
            onClick={() =>
              setMicrobiotaOpen(!microbiotaOpen)
            }
          >
            La Microbiota intestinal:
          </h3>
          {microbiotaOpen && (
            <p className='me_content_area-text'>
              La microbiota intestinal desempeña un papel
              crucial en nuestra salud y bienestar, ya que
              además de influir en la función digestiva y la
              absorción de nutrientes, también está en
              comunicación con el sistema inmunológico,
              influye en el metabolismo y en la producción
              de neurotransmisores siendo un factor clave en
              el estado de salud físico, mental y emocional,
              pilares fundamentales del bienestar de todo
              ser humano. <br />
              El combinar e integrar la nutrición con estas
              áreas nos da la posibilidad de abordar la
              salud de una manera más holística apoyándonos
              en una alimentación y estilo de vida
              consiente. <br />
              Consciente con nosotros mismos y con nuestro
              entorno.
            </p>
          )}
        </div>
        <p className='me_content_msg'>
          “Te proporciono herramientas y estrategias para
          ser dueño de tu salud y te acompaño en el proceso
          hacia una vida más saludable y consciente”.
        </p>
        <p className='me_content_name'>
          <b>Victoria.</b> <br />
          <i> Balance - Nutrición Integrativa.</i>
        </p>
      </div>
    </div>
  )
}
