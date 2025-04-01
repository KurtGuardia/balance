import '../styles/products.scss'
import { motion } from 'framer-motion'
import img from '../imgs/alimentacion.webp'

const Products = () => {
  return (
    <div className='products' id='products'>
      <h2 className='products_title'>Productos</h2>
      <div className='products_content'>
        <p className='products_text'>
          Si deseas aprender cómo la <b>alimentación</b>{' '}
          puede
          <b>
            {' '}
            prevenir enfermedades, mejorar tu salud
            metabólica y fortalecer tu sistema inmune
          </b>
          , te invito a descubrir mi e-book{' '}
          <b>"Alimentación que te Cuida"</b>, donde
          encontrarás propuestas de desayunos y snacks
          diseñados para cuidar tu cuerpo desde adentro, con
          recetas sencillas y deliciosas que puedes
          incorporar fácilmente en tu rutina diaria.
          <br />
          <br /> No pierdas la oportunidad de transformar tu
          alimentación y, con ello, tu salud.
          <br />
          <br />{' '}
          <div>
            ¡Haz clic{' '}
            <motion.a
              whileHover={{
                color: '#eeddc9',
                transition: {
                  duration: 0.25,
                  ease: 'easeInOut',
                },
              }}
              href='https://balancenutricionintegrativa.hotmart.host/pagina-de-ventas-c1a9f2a9-74c6-4edb-9cab-90c3fd6d2307'
              target='_blank'
              rel='noreferrer'
              title='Ir a comprar eBook en Hotmart'
              className='conctact_options-whatsapp'
            >
              aquí
            </motion.a>{' '}
            para obtener tu copia y empieza a cuidar de ti
            desde hoy!
          </div>
        </p>
        <img
          src={img}
          alt='Portada de Alimentación que te cuida por Victoria Espada.'
        />
      </div>
    </div>
  )
}

export default Products
