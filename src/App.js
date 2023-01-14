import React from 'react'; //importar react
import './App.css'; // importar css para app
import Header from './components/header/Header';// importar componente para HEADER
import Home from './components/home/Home';// importar componente para HOME
import About from './components/about/About';// importar componente para SOBRE
import Skills from './components/skills/Skills';// importar componente para HABILIDADES
import Work from './components/work/Work';// importar componente  para portifolio
import Contact from './components/contact/Contact'; //importar componente para incluir CONTATO
import Footer from './components/footer/Footer';//importar componente para incluir rodape
import Scrollup from './components/scrollup/Scrollup';//importar componente para incluir rolar pagina para cima


function App() {
  return (
    <div className="App">
      <>

      {/* Adicionar Header ao app */}
      <Header />
      
      
      <main className="main">
        {/* Adicionar Home(inicio) ao app */}
        <Home />

        {/* Adicionar Sobre ao app */}
        <About />

        {/* Adicionar Habilidades ao app */}
        <Skills />

        {/* Adicionar projetos portifolio(WORK) ao app */}
        <Work />

        {/* Adicionar Contato ao app */}
        <Contact />

        {/* Adicionar rodape ao app */}
        <Footer />

        {/* Adicionar rolar para cima ao app */}
        <Scrollup />        
      </main>
      
      </>
      
    </div>
  );
}

export default App;
