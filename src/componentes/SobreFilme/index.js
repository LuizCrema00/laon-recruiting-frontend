import './SobreFilme.css'
import { useParams } from 'react-router-dom'

function SobreFilme({ filmes }) {
    const { id } = useParams();
    const filme = filmes.find((filme) => filme.id === parseInt(id));
    return (
        <div> 
            <div className='img-filme'>
                <img src={filme.image} alt={filme.titulo} />
                <button className='botao-assista-trailer'>Assista ao Trailer</button>
            </div>
            <h2 className='titulo-filme'>{filme.titulo}</h2>
            <p className='original-titulo'>Titulo original: {filme.tituloOriginal}</p>
            <p className='Ano'>Ano: {filme.Ano}</p>
            <p className='Duracao'>Duração: {filme.Duracao}</p>
            <p className='Sinopse'>Sinopse</p>
            <p className='Descricao-sinopse'>{filme.Sinopse}</p>
            <p className='Elenco'>Elenco</p>
            <p className='Elenco-descricao'>{filme.Elenco}</p>
            <p className='Premios'>Prêmios</p>
            <p className='Premios-lista'>{filme.Premios}</p>
            <p className='Diretor'>Diretor</p>
            <p className='Diretor-nome'>{filme.Diretor}</p>
            <p className='Avaliacao'>Avaliações</p>
            <p className='Avaliacao-nota'>{filme.Avaliacoes}</p>
        </div>
    )
}

export default SobreFilme