import '../styles/contact.scss'
// import { ReactComponent as Logo } from '../imgs/logo.svg'
// import { motion } from 'framer-motion'
// import yoga from '../imgs/yoga.png'
// import { ReactComponent as Whatsapp } from '../imgs/whatsapp.svg'
import FB from '../imgs/facebook.png'
import IG from '../imgs/instagram.png'
import LinkedIn from '../imgs/linkedin.png'

export default function Contact() {
  // const logoAnimation = {
  //   animateColor: {
  //     fill: [
  //       '#92A28E',
  //       '#a38b93',
  //       '#eeddc9',
  //       '#F6F6EA',
  //       '#eeddc9',
  //       '#a38b93',
  //       '#92A28E',
  //     ],
  //     transition: {
  //       duration: 4,
  //       ease: 'easeOut',
  //       repeat: Infinity,
  //       repeatDelay: 0,
  //       direction: 'alternate',
  //     },
  //   },
  //   animanteBounce: {
  //     y: ['0%', '5%'],
  //     transition: {
  //       duration: 1,
  //       ease: 'easeOut',
  //       repeat: Infinity,
  //       repeatType: 'reverse',
  //     },
  //   },
  // }

  return (
    <div className='contact' id='contact'>
      {/* <h2 className='contact_title'>
        Atención Nutricional Personalizada <br />
        Consulta Privada Online
      </h2>
      <div className='contact_options'>
        <motion.a
          initial={{
            borderBottom: '2px solid transparent',
          }}
          whileHover={{
            scale: 1.05,
            borderBottom: '2px solid #92A28E',
            color: '#92A28E',
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
          <span className='contact_options-whatsapp-icon'>
            <Whatsapp />
          </span>{' '}
          (+34) 634 150 027
        </motion.a>
        <motion.a
          initial={{
            borderBottom: '2px solid transparent',
          }}
          whileHover={{
            scale: 1.05,
            borderBottom: '2px solid #92A28E',
            color: '#92A28E',
            transition: {
              duration: 0.25,
              ease: 'easeInOut',
            },
          }}
          href='mailto:balancenutricionintegrativa@gmail.com?subject=Conulsta%20serivico%20de%20nutrición&body=Hola Victoria,%20me%20interesa%20el%20servicio%20de%20nutrición%20integrativa%20que%20ofreces,%20quisiera%20lo%20siguiente:
'
          target='_blank'
          rel='noreferrer'
          title='Click y envíame un email'
          className='conctact_options-mail'
        >
          balancenutricionintegrativa@gmail.com
        </motion.a>
        <img
          src={yoga}
          alt='Yoga and nutrition'
          className='contact_options-bgImg'
        />
      </div>
      <div className='contact_name'>
        Victoria Espada
        <motion.div
          className='contact_name-logo'
          initial={{ y: 0 }}
          animate={{
            y: ['0%', '15%'],
            transition: {
              duration: 1.5,
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
        Nutricionista Dietista
      </div> */}
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
    </div>
  )
}
