import './Series.css'
import { Link } from 'react-router-dom'


function Series() {
    const series = [
        {id:1, titulo: 'Objetos Cortantes', tituloOriginal: 'Sharp Objects', 
        Ano: '2018', Duracao: '1 Temporada', 
        Sinopse: 'Camille Preaker (Amy Adams) é uma repórter que precisa retornar à sua cidade natal para acompanhar as investigações dos misteriosos assassinatos de duas adolescentes. O retorno a Wind Gap também traz à tona os fantasmas de seu passado, já que Camille será forçada a reencontrar a sua mãe, a hipocondríaca Adora Crellin (Patricia Clarkson), a meia irmã que mal conhece, Amma (Eliza Scanlen), e o padrastro Alan (Henry Czerny). Ao mesmo tempo, ela lida com os distúrbios emocionais, pois acabou de passar uma temporada em uma instituição psiquiátrica. ', 
        Elenco: ' Amy Adams, Patricia Clarkson, Chris Messina', Diretor: 'Jean-Marc Vallée', 
        Premios: 'Globo de Ouro Melhor Atriz Coadjuvante, Critics Choice Television Award Melhor Atriz Secundaria', Avaliacoes: 'IMDb 8.1', image: '/imagens/serie-01.png'},
        {id:2, titulo: 'The Outsider', tituloOriginal: 'The Outsider', 
        Ano: '2020', Duracao: '1 Temporada', 
        Sinopse: 'Terry Maitland (Jason Bateman), treinador da liga infantil de baseball, professor de inglês e pai de duas filhas, é um dos homens mais queridos e respeitados da cidade em que vive. Mas, um dia, tudo muda quando ele é acusado de assassinar um menino de onze anos.', 
        Elenco: ' Ben Mendelsohn, Bill Camp, Jeremy Bobb', Diretor: 'Richard Price', 
        Premios: '-', Avaliacoes: 'IMDb 7.7', image: '/imagens/serie-02.png'},
        {id:3, titulo: 'The Crown', tituloOriginal: 'The Crown', 
        Ano: '2016', Duracao: '5 Temporadas', 
        Sinopse: 'Inspirada em acontecimentos reais, esta série de ficção dramatiza a vida da rainha Elizabeth II e os eventos políticos e pessoais que moldaram seu reinado.', 
        Elenco: ' Imelda Staunton, Jonathan Pryce, Lesley Manville', Diretor: 'Peter Morgan, Stephen Daldry', 
        Premios: 'Premio Globo de Ouro: Melhor Série Dramáturgica', Avaliacoes: 'IMDb 8.6', image: '/imagens/serie-03.png'},
        {id:4, titulo: 'Chernobyl', tituloOriginal: 'Chernobyl', 
        Ano: '2019', Duracao: '1 Temporada', 
        Sinopse: '"Chernobyl" é uma minissérie que retrata o desastre nuclear de 1986, revelando a negligência governamental, a luta para controlar a radiação e os heróis que arriscaram suas vidas para minimizar os danos. É uma história chocante sobre as consequências humanas e as lições aprendidas a partir dessa tragédia.', 
        Elenco: ' Jared Harris, Stellan Skarsgård, Paul Ritter', Diretor: 'Craig Mazin', 
        Premios: 'Premio Emmy do Primetime Melhor Minissérie', Avaliacoes: 'IMDb 9.4', image: '/imagens/serie-04.png'},
        {id:5, titulo: 'Clarice', tituloOriginal: 'Clarice', 
        Ano: '2021', Duracao: '1 Temporada', 
        Sinopse: 'Um mergulho profundo na história pessoal e desconhecida da agente do FBI Clarice Starling, enquanto ela volta ao trabalho para perseguir assassinos em série e predadores sexuais e navega no mundo político de altos riscos de Washington, DC.', 
        Elenco: ' Rebecca Breeds, Michael Cudlitz, Nick Sandow', Diretor: 'Jenny Lumet, Alex Kurtzman', 
        Premios: '-', Avaliacoes: 'IMDb 6.6', image: '/imagens/serie-05.png'},
        {id:6, titulo: 'Ozark', tituloOriginal: 'Ozark', 
        Ano: '2017', Duracao: '4 Temporadas', 
        Sinopse: '"Ozark" é uma série de drama que segue Marty Byrde, um consultor financeiro que é forçado a lavar dinheiro para um cartel perigoso. Ele se muda com sua família para os montes Ozark, onde enfrenta criminosos locais, pressões constantes e dilemas morais. Marty luta para recuperar dinheiro perdido enquanto tenta manter sua família segura e escapar das consequências devastadoras de seu envolvimento no mundo do crime.', 
        Elenco: ' Jason Bateman, Laura Linney, Sofia Hublitz', Diretor: 'Bill Dubuque, Mark Williams (II)', 
        Premios: 'Primetime Emmy Awards Mlehor ator em série drámatica, Melhor Atriz coadjuvante', Avaliacoes: 'IMDb 8.5', image: '/imagens/serie-06.png'}
      
      ]

    return (
        <section>
            <div className='lista-series'>
            {series.map((serie) => (
               <Link to={`/series/${serie.id}`} key={serie.id} className='item-serie'>
                     <img src={serie.image} alt={serie.titulo}></img>
               </Link>
            ))}
            </div>
        </section>
    )
}

export default Series