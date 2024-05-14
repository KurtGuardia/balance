import { ReactComponent as Logo } from '../imgs/logo.svg'
import img from '../imgs/bottom.jpg'
import '../styles/landing.scss'
import Integrativa from './Integrativa'
import Me from './Me'
import Services from './Services'
import Process from './Process'
import Contact from './Contact'
import { motion } from 'framer-motion'

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
      y: ['0%', '4%'],
      transition: {
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }

  const currentDate = new Date()
  const month = currentDate.toLocaleString('default', {
    month: 'long',
  })
  const year = currentDate.getFullYear()

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
        {/* <h1 className='landing_hero_title'>Balance</h1>
        <h2 className='landing_hero_subtitle'>
          Nutrición Integrativa
        </h2> */}
        <h1 className='landing_hero_title'>
          Nutrición Integrativa
        </h1>
        <h2 className='landing_hero_subtitle'>
          Bienestar físico, emocional, mental y espiritual.{' '}
        </h2>
        <h3 className='landing_hero_desc'>
          Una nutrición adecuada es la base para mantener un
          buen estado de salud, prevenir enfermedades en el
          futuro y promover el bienestar a largo plazo.
        </h3>
        <div className='landing_hero_bottom'>
          <div className='landing_hero_bottom-text'>
            Esp. Microbiota - PNIE
          </div>
          <img
            src={img}
            alt='wide range of healthy food'
            className='landing_hero_bottom-img'
          />
        </div>
      </div>
      <div className='landing_content'>
        {/* <motion.p
          initial={{ opacity: 0, scale: 0.5, y: '120%' }}
          whileInView={{ opacity: 1, scale: 1, y: '0%' }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            opacity: {
              duration: 1.8,
            },
          }}
          viewport={{ margin: '100px' }}
          className='landing_content-desc'
        >
          Atención nutricional personalizada, tomando en
          cuenta la influencia de la alimentación en la
          salud física, emocional y mental; y su relación
          con la microbiota intestinal.
        </motion.p> */}
        <Me />
        <Integrativa />
        <Services />
        <Process />
        <Contact />
      </div>
      <div className='landing_footer'>
        <p className='landing_footer-date'>
          Updated: {month}, {year}
        </p>
        <div className='landing_footer-dev'>
          <p>Developed by:</p>
          <motion.div whileHover={{ rotate: '-10deg' }}>
            <a
              href='https://www.kurtguardia.com'
              target='_blank'
              rel='noreferrer'
            >
              Kurt Guardia
            </a>
          </motion.div>
        </div>
        <p className='landing_footer-copy'>
          &copy; All rights reserved
        </p>
      </div>
    </div>
  )
}
