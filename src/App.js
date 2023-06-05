import Body from './componentes/Body';
import Navbar from './componentes/Navbar';
import SobreFilme from './componentes/SobreFilme';
import SobreSerie from './componentes/SobreSerie';
import Rodape from './componentes/rodape';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
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

  const series = [
  {id:1, titulo: 'Objetos Cortantes', tituloOriginal: 'Sharp Objects', 
  Ano: '2018', Duracao: '1 Temporada', 
  Sinopse: '"Objetos Cortantes" é uma série de suspense baseada no livro de Gillian Flynn. A história segue a repórter Camille Preaker, que volta à sua cidade natal para investigar um assassinato. Enfrentando seus próprios demônios pessoais, Camille descobre segredos perturbadores enquanto tenta desvendar a verdade sombria por trás dos crimes. ', 
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
    <div className="App">
      <Navbar />
      <Router>
          <Routes>
            <Route exact path="/" element={<Body/>} />
            <Route path="/filmes/:id" element={<SobreFilme filmes={filmes}/>} />
            <Route path="/series/:id" element={<SobreSerie series={series}/>} />
          </Routes>
      </Router>
      <Rodape />
    </div>
  );
}

export default App;
