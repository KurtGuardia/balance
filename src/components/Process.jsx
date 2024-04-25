import { useState } from 'react'
import '../styles/process.scss'

export default function Process() {
  const [step1Open, setStep1Open] = useState(false)
  const [step2Open, setStep2Open] = useState(false)
  const [step3Open, setStep3Open] = useState(false)
  const [step4Open, setStep4Open] = useState(false)

  return (
    <div className='process' id='process'>
      <h2 className='process_title'>El proceso</h2>
      <ul>
        <li
          onClick={() => setStep1Open(!step1Open)}
          className={
            step1Open ? 'process_step box' : 'process_step'
          }
        >
          <h3 className='process_step-title'>
            <span className='process_step-title-num'>
              1
            </span>
            Primera Consulta:
          </h3>
          {step1Open && (
            <p className='process_step-text'>
              Llegará a tu correo un enlace para conectarnos
              por Videollamada, la cual tendrá una duración
              de 45 minutos a una hora, donde
              <b>evaluaremos </b>
              tus hábitos alimentarios, estado
              emocional-mental, estilo de vida, tus gustos y
              preferencias entre otras cosas. También
              revisaremos objetivos en base a tu caso.
            </p>
          )}
        </li>
        <li
          onClick={() => setStep2Open(!step2Open)}
          className={
            step2Open ? 'process_step box' : 'process_step'
          }
        >
          <h3 className='process_step-title'>
            <span className='process_step-title-num'>
              2
            </span>
            Desarrollo de tu plan personalizado:
          </h3>
          {step2Open && (
            <p className='process_step-text'>
              De acuerdo a <b>tus necesidades</b> elaboraré
              tu plan alimentario con recomendaciones de
              estilo de vida y recetas, incluiré técnicas de
              relajación y manejo de estrés además de
              suplementación si es necesaria.
            </p>
          )}
        </li>
        <li
          onClick={() => setStep3Open(!step3Open)}
          className={
            step3Open ? 'process_step box' : 'process_step'
          }
        >
          <h3 className='process_step-title'>
            <span className='process_step-title-num'>
              3
            </span>
            Entrega del Plan:
          </h3>
          {step3Open && (
            <p className='process_step-text'>
              Una semana después de la primera consulta,
              tendremos una nueva videollamada donde te
              compartiré <b>tu plan alimentario</b> con las
              recomendaciones mencionadas. Después te
              enviaré todo el material a tu correo
              electrónico. Cualquier duda que tengas puedes
              escribirme al correo:
              balancenutricionintegrativa@gmail.com
            </p>
          )}
        </li>
        <li
          onClick={() => setStep4Open(!step4Open)}
          className={
            step4Open ? 'process_step box' : 'process_step'
          }
        >
          <h3 className='process_step-title'>
            <span className='process_step-title-num'>
              4
            </span>
            Consulta de Seguimiento:
          </h3>
          {step4Open && (
            <p className='process_step-text'>
              Dos semanas después
              <b>evaluaremos como te sientes</b>, tu
              adherencia al plan alimentario y a las
              recomendaciones de estilo de vida, si es
              necesario haremos modificaciones.
            </p>
          )}
        </li>
      </ul>
    </div>
  )
}
