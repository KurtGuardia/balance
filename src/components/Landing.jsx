import { ReactComponent as Logo } from '../imgs/logo.svg'
import '../styles/landing.scss'
import Header from './Header'
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
      y: ['0%', '5%'],
      transition: {
        duration: 1,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }
  return (
    <div className='landing'>
      <Header />
      <div className='landing_hero'>
        <motion.div
          className='landing_hero_img'
          initial={{ y: 0 }}
          animate={{
            y: ['0%', '4%'],
            transition: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        >
          <motion.div
            initial={{ fill: '#92A28E' }}
            animate={logoAnimation.animateColor}
          >
            <Logo />
          </motion.div>
        </motion.div>
        <h1 className='landing_hero_title'>Balance</h1>
        <h2 className='landing_hero_subtitle'>
          Nutrición Integrativa
        </h2>
      </div>
      <div className='landing_desc'>
        <p>
          Atención nutricional personalizada, tomando en
          cuenta la influencia de la alimentación en la
          salud física, emocional y mental; y su relación
          con la microbiota intestinal.
        </p>
      </div>
      <Integrativa />
      <Me />
      <Services />
      <Process />
      <Contact />
    </div>
  )
}
