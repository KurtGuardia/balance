import '../styles/products.scss'

const Products = () => {
  return (
    <div className='products' id='products'>
      <h2 className='products_title'>Productos</h2>
      <p className='products_text'>
        Si deseas aprender cómo la alimentación puede
        <b>
          {' '}
          prevenir enfermedades, mejorar tu salud metabólica
          y fortalecer tu sistema inmune
        </b>
        , te invito a descubrir mi e-book{' '}
        <b>"Alimentación que te Cuida"</b>, donde
        encontrarás propuestas de desayunos y snacks
        diseñados para cuidar tu cuerpo desde adentro, con
        recetas sencillas y deliciosas que puedes incorporar
        fácilmente en tu rutina diaria.<br/> No pierdas la
        oportunidad de transformar tu alimentación y, con
        ello, tu salud.<br/><br/> <div>¡Haz clic <a>aquí</a> para obtener tu copia
        y empieza a cuidar de ti desde hoy!</div>
      </p>
    </div>
  )
}

export default Products
