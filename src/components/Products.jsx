import '../styles/products.scss'
import { motion } from 'framer-motion'

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
        fácilmente en tu rutina diaria.
        <br /> No pierdas la oportunidad de transformar tu
        alimentación y, con ello, tu salud.
        <br />
        <br />{' '}
        <div>
          ¡Haz clic{' '}
          <motion.a
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
          </motion.a>{' '}
          para obtener tu copia y empieza a cuidar de ti
          desde hoy!
        </div>
      </p>
    </div>
  )
}

export default Products
