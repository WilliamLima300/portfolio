import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">William</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Habilidades</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/williamlima300/"  rel="noopener noreferrer" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/william.lima.92167/" rel="noopener noreferrer" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://twitter.com/williamlima300" rel="noopener noreferrer" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; William Lima Alves. Todos direitos reservados.</span>
        </div>
    </footer>
  )
}

export default Footer;
