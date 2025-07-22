import '../styles/contact.scss'
import FB from '../imgs/facebook.png'
import { motion } from 'framer-motion'
import IG from '../imgs/instagram.png'
import LinkedIn from '../imgs/linkedin.png'

const motionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    ease: 'easeIn',
    delay: 0.5,
  },
}

export default function Contact() {
  return (
    <motion.div
      {...motionProps}
      className='contact'
      id='contact'
    >
      <a
        href='https://www.facebook.com/profile.php?id=61559428017197'
        className='contact_social-media'
        target='_blank'
        rel='noreferrer'
      >
        <img src={FB} alt='Facebook logo' />
      </a>
      <a
        href='https://www.instagram.com/balance_nutricionintegrativa/'
        target='_blank'
        rel='noreferrer'
        className='contact_social-media'
      >
        <img src={IG} alt='Instagram logo' />
      </a>
      <a
        href='https://www.linkedin.com/in/victoriaespada051097/'
        className='contact_social-media'
        target='_blank'
        rel='noreferrer'
      >
        <img src={LinkedIn} alt='LinkedIn logo' />
      </a>
    </motion.div>
  )
}
