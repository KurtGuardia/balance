import { ReactComponent as Logo } from '../imgs/logo.svg'
import '../styles/landing-page.scss'
import Header from './Header'
import Integrativa from './Integrativa'
import Me from './Me'
import Services from './Services'
import Process from './Process'
import Contact from './Contact'

export default function Landing() {
  return (
    <div className='landing'>
      <Header />
      <div className='landing_hero'>
        <Logo />
      </div>
      <Integrativa />
      <Me />
      <Services />
      <Process />
      <Contact />
    </div>
  )
}
