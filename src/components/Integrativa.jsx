import '../styles/integrativa.scss'
import img1 from '../imgs/1.png'
import img2 from '../imgs/2.png'
import img3 from '../imgs/3.png'
import img4 from '../imgs/4.png'
import img5 from '../imgs/5.png'
import img6 from '../imgs/6.png'

export default function Integrativa() {
  return (
    <div className='landing_content_integrativa'>
      <h2 className='landing_content_integrativa-title'>
        ...y que es Nutrición Integrativa?
      </h2>
      <ul className='landing_content_integrativa-grid'>
        <li className='landing_content_integrativa-grid-pair'>
          <img
            className='landing_content_integrativa-grid-pair--img'
            src={img1}
            alt='Yoga, Nutricion, bienestar, estilo de vida'
          />
          <p className='landing_content_integrativa-grid-pair--text'>
            Tiene un enfoque <b>holístico</b> que combina
            los principios de la nutrición y aspectos
            fundamentales del estilo de vida. Es una forma
            de abordar la alimentación y el bienestar que
            considera no solo los aspectos físicos, sino
            también los emocionales y mentales.
          </p>
        </li>
        <li className='landing_content_integrativa-grid-pair'>
          <img
            className='landing_content_integrativa-grid-pair--img'
            src={img2}
            alt=''
          />
          <p className='landing_content_integrativa-grid-pair--text'>
            Desde esta perspectiva se reconoce que los
            alimentos no solo nutren nuestro cuerpo, sino
            también <b>nuestra mente y emociones</b>,
            examinando cómo las emociones pueden afectar
            nuestras elecciones alimentarias y viceversa. Y
            como esto rige nuestro estilo de vida.
          </p>
        </li>
        <li className='landing_content_integrativa-grid-pair'>
          <img
            className='landing_content_integrativa-grid-pair--img'
            src={img3}
            alt=''
          />
          <p className='landing_content_integrativa-grid-pair--text'>
            Se centra en ofrecer pautas de alimentación
            <b>personalizadas</b>, con el objetivo de lograr
            un estado de salud óptimo y prevenir
            enfermedades.
          </p>
        </li>
        <li className='landing_content_integrativa-grid-pair'>
          <img
            className='landing_content_integrativa-grid-pair--img'
            src={img4}
            alt=''
          />
          <p className='landing_content_integrativa-grid-pair--text'>
            Este enfoque busca empoderar a las personas para
            que <b>tomen el control</b> de su alimentación y
            estilo de vida, promoviendo cambios duraderos y
            verdaderos en su salud.
          </p>
        </li>
        <li className='landing_content_integrativa-grid-pair'>
          <img
            className='landing_content_integrativa-grid-pair--img'
            src={img5}
            alt=''
          />
          <p className='landing_content_integrativa-grid-pair--text'>
            Toma en cuenta el estado del sistema digestivo,
            especialmente el del intestino, ya que para que
            exista una buena nutrición debe haber una
            digestión y absorción de nutrientes adecuada. El
            intestino es considerado como el segundo cerebro
            y está en constante comunicación con el cerebro
            a través de un eje conocido como el eje
            intestino-cerebro, por lo que si cuidamos el
            intestino también estamos{' '}
            <b>cuidando la salud mental y emocional</b>. Lo
            mismo ocurre a la inversa.
          </p>
        </li>
        <li className='landing_content_integrativa-grid-pair'>
          <img
            className='landing_content_integrativa-grid-pair--img'
            src={img6}
            alt=''
          />
          <p className='landing_content_integrativa-grid-pair--text'>
            Promueve <b>ser conscientes</b> con los
            alimentos que escogemos y en nuestra actividad
            diaria, cultivando una relación más profunda con
            nosotros mismos y el mundo que nos rodea.
          </p>
        </li>
      </ul>
    </div>
  )
}
