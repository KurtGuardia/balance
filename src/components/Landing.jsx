import { ReactComponent as Logo } from '../imgs/logo.svg'
import '../styles/landing.scss'
import Integrativa from './Integrativa'
import Me from './Me'
import Services from './Services'
import Process from './Process'
import Contact from './Contact'
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'

export default function Landing() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0.7, 1, 1],
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0, 1, 1],
  )
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    ['150%', '0%', '0%'],
  )
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
  const animateRotation = {
    rotation: ['0deg', '10deg'],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
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
          className='landing_hero_img'
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
        <h1 className='landing_hero_title'>Balance</h1>
        <h2 className='landing_hero_subtitle'>
          Nutrición Integrativa
        </h2>
      </div>
      <div className='landing_content'>
        <motion.p
          style={{
            opacity,
            scale,
            y,
            transition: 'all 1s ease-out',
          }}
          className='landing_content-desc'
        >
          Atención nutricional personalizada, tomando en
          cuenta la influencia de la alimentación en la
          salud física, emocional y mental; y su relación
          con la microbiota intestinal.
        </motion.p>
        <Integrativa />
        <Me />
        <Services />
        <Process />
        <Contact />
      </div>
      <div className='landing_footer'>
        <p className='landing_footer-date'>
          Updated: {month}, {year}
        </p>
        <div
          className='landing_footer-dev'
          whileTap={{ rotate: '100deg' }}
        >
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
