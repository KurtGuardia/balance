import { useEffect, useState } from 'react'
import { ReactComponent as Logo } from '../imgs/logo.svg'
import '../styles/header.scss'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const list = [
    ['Sobre Mí', 'me'],
    ['Nutrición Integrativa', 'integrativa'],
    ['Servicios', 'services'],
    ['Proceso', 'process'],
  ]

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.screen.width
      if (screenWidth <= 768) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {isSmallScreen && (
        <div
          className={`ham ${menuOpen ? 'active' : ''}`}
          onClick={() => toggleMenu()}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {(!isSmallScreen || menuOpen) && (
        <div
          className={
            isSticky && !isSmallScreen
              ? 'header sticky'
              : 'header'
          }
        >
          <AnchorLink href='#top' offset='150'>
            <div
              className='header_logo'
              onClick={() => toggleMenu()}
            >
              <Logo />
              {!isSmallScreen && (
                <p className='header_logo-name'>Balance</p>
              )}
            </div>
          </AnchorLink>

          <ul>
            {list.map((item) => (
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
                onClick={() => toggleMenu()}
              >
                <AnchorLink
                  href={`#${item[1]}`}
                  offset='150'
                >
                  {item[0]}
                </AnchorLink>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      {(isSmallScreen && menuOpen) && <div className="overlay" onTouchStart={() => toggleMenu()}/>}
    </>
  )
}
