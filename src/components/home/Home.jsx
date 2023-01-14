import React from 'react'; // importar react from react
import "./home.css";// importar CSS da pagina
import Social from './Social'; //importar Links e icones de redes sociais
import Data from './Data';//importar informações do nome e descrição da pagina home
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    // Adicionar configurações e tags da pagina Home(Inicio)
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid" >
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home;
