import '../styles/services.scss'

export default function Services() {
  return (
    <div className='services'>
      <h2 className='services_title'>
        En que puedo ayudarte:
      </h2>
      <ul>
        <li className='services_service'>
          <h3 className='services_service-title'>
            Metabolismo
          </h3>
          <p className='services_service-text'>
            Si tienes <b>alguna condición o enfermedad</b>
            que deseas mejorar: Sobre peso, Diabetes,
            resistencia a la insulina, Síndrome de Ovario
            Poliquístico (SOP), Hipertensión, triglicéridos
            y/o colesterol elevado entre otras.
          </p>
        </li>
        <li className='services_service'>
          <h3 className='services_service-title'>
            Aparato Digestivo
          </h3>
          <p className='services_service-text'>
            Si deseas <b>mejorar síntomas</b> como:
            Hinchazón y/o distensión abdominal, inflamación,
            constipación, sensación de pesadez, acidez o
            reflujo.
          </p>
        </li>
        <li className='services_service'>
          <h3 className='services_service-title'>
            Habito y estilo de Vida Saludable
          </h3>
          <p className='services_service-text'>
            Si lo que estas buscando es
            <b>mejorar tus hábitos</b>y estilo de vida estas
            en el lugar correcto.
          </p>
        </li>
        <li className='services_service'>
          <h3 className='services_service-title'>
            Nutrición Vegetariana/Vegana
          </h3>
          <p className='services_service-text'>
            Si has escogido un estilo de vida
            <b>libre de productos animales</b> y necesitas
            orientación en que alimentos escoger y como
            combinarlos para tener un aporte adecuado de
            nutrientes, esto es para ti.
          </p>
        </li>
      </ul>
    </div>
  )
}
