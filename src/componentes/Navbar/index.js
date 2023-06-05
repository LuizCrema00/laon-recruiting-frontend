import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return(
        <header>
            <nav className='nav-bar'>
            <img src='/imagens/Logo.png' alt='logo da empresa'></img>
            <ul className='lista'>
                <li className='busca'><FontAwesomeIcon color='#ffffff' icon={faMagnifyingGlass} /></li>
                <li className='perfil'><FontAwesomeIcon color='#ffffff' icon={faUser} /></li>
            </ul>
        </nav>
        </header>
        
    )
}

export default Navbar