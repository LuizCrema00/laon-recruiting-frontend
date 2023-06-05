import './SobreSerie.css'
import { useParams } from 'react-router-dom'

function SobreFilme({ series }) {
    const { id } = useParams();
    const serie = series.find((serie) => serie.id === parseInt(id));
    return (
        <div> 
            <div className='img-serie'>
                <img src={serie.image} alt={serie.titulo} />
                <button className='botao-assista-trailer'>Assista ao Trailer</button>
            </div>
            <h2 className='titulo-serie'>{serie.titulo}</h2>
            <p className='original-titulo'>Titulo original: {serie.tituloOriginal}</p>
            <p className='Ano'>Ano: {serie.Ano}</p>
            <p className='Duracao'>Duração: {serie.Duracao}</p>
            <p className='Sinopse'>Sinopse</p>
            <p className='Descricao-sinopse'>{serie.Sinopse}</p>
            <p className='Elenco'>Elenco</p>
            <p className='Elenco-descricao'>{serie.Elenco}</p>
            <p className='Premios'>Prêmios</p>
            <p className='Premios-lista'>{serie.Premios}</p>
            <p className='Diretor'>Diretor</p>
            <p className='Diretor-nome'>{serie.Diretor}</p>
            <p className='Avaliacao'>Avaliações</p>
            <p className='Avaliacao-nota'>{serie.Avaliacoes}</p>
        </div>
    )
}

export default SobreFilme