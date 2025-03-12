import Logo from '../LexElite Assets/logos/Logo-1.svg'
import '../css/nav.css'
import { useState } from 'react'
import { BiMenu , BiX} from 'react-icons/bi'
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <>
    <nav className="nav" role="navigation" aria-label="main navigation">
     <div className="logo">
        <img loading="lazy" src={Logo} alt=""  />
        <h2>LexElite</h2>
     </div>
     <div onClick={toggleMenu} className={`nav-menu ${!showMenu ? 'active' : ""}`} >
        <ul>
            <li><a className='nav-links'  href="#">Home</a></li>
            <li><a className='nav-links' href="#">About Me</a></li>
            <li><a className='nav-links' href="#">Services</a></li>
            <li><a className='nav-links' href="#">Case Studies</a></li>
            <li><a className='nav-links' href="#">Blog</a></li>
            <li><a className='nav-links' href="#">Contact</a></li>           
        </ul>
        <div className="btns">
        <a href="#" className="free-consult">Schedule a Consultation</a>
        </div>
     </div>
     <div className="nav-menu-icon" onClick={toggleMenu}>
      {!showMenu ? <BiMenu className='menu-icon' /> : <BiX className='menu-icon'/>}
     </div>
      
    </nav>
  </>
  )
}

export default Nav