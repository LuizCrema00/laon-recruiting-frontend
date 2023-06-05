import './Rodape.css'

function Rodape () {
    return (
        <footer className='rodape'>
            <img className='logo' src='/imagens/Logo.png' alt='logo da empresa'></img>
                <div className='lista'>
                    <p>Início</p>
                    <p>Entrar ou Cadastrar</p>
                    <p>Termos e condições</p>
                    <p>Política de privacidade</p>
                    <p>Ajuda</p>
                </div>
                <div className='redes-sociais'>
                    <img className='facebook' src='/imagens/facebook-icon@2x.png' alt='logo facebook'></img>
                    <img className='twitter' src='/imagens/twitter-icon@2x.png' alt='logo twitter'></img>
                    <img className='youtube' src='/imagens/youtube-icon@2x.png' alt='logo youtube'></img>
                </div>
        </footer>
    )
}

export default Rodape