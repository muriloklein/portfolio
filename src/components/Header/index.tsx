"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("mainHeader");
      if (window.scrollY > 0) {
        header?.classList.add("scroll");
      } else {
        header?.classList.remove("scroll");
      }
    };

    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 780);
      console.log({ isMobileMenuOpen });
      if (!isMobileScreen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileScreen, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="mainHeader">
      <nav id="mainNav">
        <div>
          <Link href="#presentationSection">
            <i className="bi-house icons" id="mainNavHomeIcon"></i>
          </Link>
        </div>
        <div id="navLinksDiv" className={!isMobileScreen ? "" : "closed"}>
          <Link href="#aboutSection" className="menuLinks">
            Sobre
          </Link>
          <Link href="#skillsSection" className="menuLinks">
            Habilidades
          </Link>
          <Link href="#projectsSection" className="menuLinks">
            Projetos
          </Link>
          <Link href="#contactSection" className="menuLinks">
            Contato
          </Link>
          <div>
            <input
              type="checkbox"
              name="check"
              className="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="label">
              <i className="bi-moon icons"></i>
              <i className="bi-sun icons"></i>
              <div className="ball"></div>
            </label>
          </div>
          <a href="files/CV.pdf" download>
            <button id="downloadButton">Baixar CV</button>
          </a>
        </div>
        <div id="mobileMenuButton" className={isMobileScreen ? "" : "closed"}>
          <button id="menuButton" onClick={toggleMobileMenu}>
            <i className="bi-list icons"></i>
          </button>
        </div>
      </nav>
      <div id="mobileMenu" className={isMobileMenuOpen ? "" : "closed"}>
        <Link href="#aboutSection" className="menuLinks ">
          Sobre
        </Link>
        <Link href="#skillsSection" className="menuLinks ">
          Habilidades
        </Link>
        <Link href="#projectsSection" className="menuLinks ">
          Projetos
        </Link>
        <Link href="#contactSection" className="menuLinks ">
          Contato
        </Link>
        <div>
          <input
            type="checkbox"
            name="check"
            className="checkbox"
            id="checkboxTwo"
          />
          <label htmlFor="checkboxTwo" className="label">
            <i className="bi-moon icons"></i>
            <i className="bi-sun icons"></i>
            <div className="ball"></div>
          </label>
        </div>
        <a href="files/CV.pdf" download>
          <button id="downloadButton">Baixar CV</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
