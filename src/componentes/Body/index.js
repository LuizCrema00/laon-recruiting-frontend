import Filmes from '../Filmes'
import Series from '../Series'
import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Body () {
    return (
        <section className='Filmes'>
            <h1 className='Titulo'>Populares</h1>
            <h2 className='subtitulo-filmes'>Filmes</h2>
            <button className='carrossel'><FontAwesomeIcon icon={faArrowRight} color='#282639' /></button>
            <Filmes />
            <h2 className='subtitulo-series'>Séries</h2>
            <Series />
        </section>
    )
}

export default Body