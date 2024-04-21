import { ReactComponent as Logo } from '../imgs/logo.svg'
import '../styles/header.scss'

export default function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
        <Logo />
        <p className='header_logo-name'>Balance</p>
      </div>
      <ul>
        <li>Sobre Mí</li>
        <li>Servicios</li>
        <li>Proceso</li>
        <li>Contacto</li>
      </ul>
    </div>
  )
}
