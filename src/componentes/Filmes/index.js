
import './Filmes.css'
import { Link } from 'react-router-dom'


function Filmes() {
    const filmes = [
        {id:1, titulo: 'Bela Vingança', tituloOriginal: 'Promising young woman', 
        Ano: '2020', Duracao: '1h 53min', 
        Sinopse: 'Nada na vida de Cassie é o que parece ser. Ela é perseverantemente inteligente, tentadoramente astuta e ainda vive uma vida dupla secreta a noite. Agora, um encorntro inesperado esta prestes a dar a Cassie a chance de corrigir os erros do passado', 
        Elenco: 'Carey Mulligan, Bo Burnaham, Alison Brie, Laverne Cox, Jennifer Coolidge e outros', Diretor: 'Emerald Fennell', 
        Premios: 'Oscar de Melhor Roteiro Original, Critics Choice Award de Melhor Atriz e Outros', Avaliacoes: 'IMDb 7.5', image: '/imagens/movie-01.png'},
        {id:2, titulo: 'Ela', tituloOriginal: 'Her', 
        Ano: '2013', Duracao: '2h 6min', 
        Sinopse: 'Um escritor solitário encontra o amor onde menos espera: ele se apaixona pelo sistema operacional que comprou para ajudar a administrar sua vida.', 
        Elenco: 'Joaquin Phoenix,Scarlett Johansson,Amy Adams', Diretor: 'Spike Jonze', 
        Premios: 'Melhor filme de 2013, pelo National Board of Review, Melhor Roteiro - Filme Musical ou Comédia, Oscar Melhor Roteiro original', Avaliacoes: 'IMDb 8.0', image: '/imagens/movie-06.png'},
        {id:3, titulo: 'Um Lugar Silencioso', tituloOriginal: 'A Quiet Place', 
        Ano: '2018', Duracao: '1h 30min', 
        Sinopse: 'Um Lugar Silencioso mostra uma realidade pós-apocaliptica, onde a população da Terra foi dizimada por uma entidade assustadora que ataca quando escuta um menor sinal de barulho. Em uma fazenda dos Estados Unidos, acompanhamos uma família do meio-oeste que tenta se manter em total silêncio para sobreviver à ameaça que ronda a sua casa.', 
        Elenco: ' Emily Blunt, John Krasinski, Millicent Simmonds', Diretor: 'John Krasinski', 
        Premios: ' Melhor Trilha Sonora Original, Producers Guild of America', Avaliacoes: 'IMDb 7.4', image: '/imagens/movie-03.png'},
        {id:4, titulo: 'Star Wars: Episódio IX', tituloOriginal: 'Star wars the rise of skywalker', 
        Ano: '2019', Duracao: '2h 22min', 
        Sinopse: 'Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren.', 
        Elenco: ' Daisy Ridley, Adam Driver, Oscar Isaac', Diretor: 'J.J Abrams', 
        Premios: 'Melhor Diretor, Melhor filme de Ficção Científica, Melhor Música', Avaliacoes: 'IMDb 6.5', image: '/imagens/movie-02.png'},
        {id:5, titulo: 'Jojo Rabbit', tituloOriginal: 'Jojo Rabbit', 
        Ano: '2019', Duracao: '1h 48min', 
        Sinopse: 'Jojo é um garoto alemão solitário que descobre que sua mãe está escondendo uma garota judia no sótão. Ajudado apenas por seu amigo imaginário, Adolf Hitler, Jojo deve enfrentar seu nacionalismo cego enquanto a Segunda Guerra Mundial prossegue.', 
        Elenco: ' Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson', Diretor: ' Taika Waititi', 
        Premios: 'Oscar de Melhor Roteiro Adaptado', Avaliacoes: 'IMDb 7.9', image: '/imagens/movie-05.png'},
        {id:6, titulo: 'Víuva Negra', tituloOriginal: 'Black Widow', 
        Ano: '2021', Duracao: '2h 13min', 
        Sinopse: 'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.', 
        Elenco: ' Scarlett Johansson, Florence Pugh, Rachel Weisz', Diretor: ' Cate Shortland', 
        Premios: 'Peoples Choice Award: Filme Favorito, Atriz de cinema favorita', Avaliacoes: 'IMDb 6.7', image: '/imagens/movie-04.png'}
    
    ]
    return (
        <section>
            <div className='lista-filmes'>
            {filmes.map((filme) => (
               <Link to={`/filmes/${filme.id}`} key={filme.id} className='item-filme'>
                     <img src={filme.image} alt={filme.titulo}></img>
               </Link>
            ))}
            </div>
        </section>
    )
}

export default Filmes