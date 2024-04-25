import { useEffect, useState } from 'react'
import { ReactComponent as Logo } from '../imgs/logo.svg'
import '../styles/header.scss'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={isSticky ? 'header sticky' : 'header'}>
      <AnchorLink href='#top' offset='150'>
        <div className='header_logo'>
          <Logo />
          <p className='header_logo-name'>Balance</p>
        </div>
      </AnchorLink>
      <ul>
        {[
          ['Sobre Mí', 'me'],
          ['Servicios', 'services'],
          ['Proceso', 'process'],
          ['Contacto', 'contact'],
        ].map((item) => (
          <motion.li
            key={item}
            initial={{
              borderBottom: '2px solid transparent',
            }}
            whileHover={{
              scale: 1.15,
              borderBottom: '2px solid #F6F6EA',
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            }}
          >
            <AnchorLink href={`#${item[1]}`}>
              {item[0]}
            </AnchorLink>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
