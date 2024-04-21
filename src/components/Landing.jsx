import '../styles/landing-page.scss'
import Header from './Header'
import Integrativa from './Integrativa'
import Me from './Me'
import Services from './Services'
import Process from './Process'
import Contact from './Contact'
import logo from '../imgs/logo.svg'

export default function Landing() {
  return (
    <div className='landing'>
      <Header />
      <div className='landing_hero'>
        <img src={logo} alt='Balance zen logo' />
      </div>
      <Integrativa />
      <Me />
      <Services />
      <Process />
      <Contact />
    </div>
  )
}
