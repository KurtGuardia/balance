import { ReactComponent as Logo } from '../imgs/logo.svg'
import img from '../imgs/bottom.png'
import '../styles/landing.scss'
import Me from './Me'
import Services from './Services'
import Process from './Process'
import Contact from './Contact'
import { motion } from 'framer-motion'
import Products from './Products'

export default function Landing() {
  const logoAnimation = {
    animateColor: {
      fill: [
        '#92A28E',
        '#a38b93',
        '#ccd2ae',
        '#eeddc9',
        '#ccd2ae',
        '#a38b93',
        '#92A28E',
      ],
      transition: {
        duration: 4,
        ease: 'easeOut',
        repeat: Infinity,
        repeatDelay: 0,
        direction: 'alternate',
      },
    },
    animanteBounce: {
      y: ['0%', '15%'],
      transition: {
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }

  const lastMonthDate = new Date()
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1)
  const month = lastMonthDate.toLocaleString('default', {
    month: 'long',
  })
  const year = lastMonthDate.getFullYear()

  return (
    <div className='landing' id='top'>
      <div className='landing_hero'>
        <motion.div
          className='landing_hero_logo'
          initial={{ y: 0 }}
          animate={logoAnimation.animanteBounce}
        >
          <motion.div
            initial={{ fill: '#92A28E' }}
            animate={logoAnimation.animateColor}
          >
            <Logo />
          </motion.div>
        </motion.div>
        <h1 className='landing_hero_title'>
          Nutrición Funcional Integrativa
        </h1>
        <h2 className='landing_hero_subtitle'>
          SALUD DIGESTIVA, MENTAL Y EMOCIONAL{' '}
        </h2>{' '}
        <motion.a
          whileHover={{
            color: '#eeddc9',
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: [-0.5, 0.5],
            transition: {
              duration: 0.5,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
          href='https://wa.me/34634150027?text=Hola Victoria,%20me%20interesa%20el%20servicio%20de%20nutrición%20integrativa%20que%20ofreces,%20quisiera%20agendar%20una%20valoración%20gratuita%2C%20por%20favor:'
          target='_blank'
          rel='noreferrer'
          title='Click y envíame un mensaje en Whatsapp'
          className='landing_hero-topCta'
        >
          Haz click <span> aquí</span> para obtener una{' '}
          <span>valoración gratuita</span>
        </motion.a>
        <h3 className='landing_hero_desc'>
          Recupera tu digestión, escucha a tu cuerpo, calma
          tu mente… y vuelve a TI.
        </h3>
        <div className='landing_hero_bottom'>
          <img
            src={img}
            alt='wide range of healthy food'
            className='landing_hero_bottom-img'
          />
        </div>
      </div>
      <div className='landing_content'>
        <Me />
        <Services />
        <Process />
        <Products />
        <Contact />
      </div>
      <div className='landing_footer'>
        <p className='landing_footer-date'>
          Updated: {month}, {year}
        </p>
        <div className='landing_footer-dev'>
          <p>Developed by:</p>
          <motion.a
            href='https://www.kurtguardia.com'
            target='_blank'
            rel='noreferrer'
            whileHover={{
              rotate: '-10deg',
              color: '#eeddc9',
              fontFamily:
                "'Brown Sugar', 'Segoe Script', 'Segoe UI', 'Tahoma', 'Verdana', 'Courier New', cursive",
            }}
          >
            Kurt Guardia
          </motion.a>
        </div>
        <p className='landing_footer-copy'>
          &copy; All rights reserved
        </p>
      </div>
    </div>
  )
}
