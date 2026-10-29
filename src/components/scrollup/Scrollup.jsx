import React, { useEffect } from 'react';
import "./scrollup.css";

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector(".scrollup")?.classList.toggle("show-scroll", window.scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#home" className="scrollup" aria-label="Voltar ao início">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
