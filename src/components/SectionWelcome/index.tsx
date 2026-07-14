import Link from "next/link";
import Image from "next/image";
import ProfileImg from "/public/profile.jpeg";

const SectionWelcome = () => {
  return (
    <section id="welcomeSection">
      <div id="welcomeText">
        <h1 id="welcomeTextTitle">Bem vindo ao meu Portfólio</h1>
        <p id="welcomeTextParagraph">
          Sou Desenvolvedor de Sistemas II com experiência no desenvolvimento de
          aplicações corporativas, integrações entre sistemas e modernização de
          aplicações legadas.

          Atualmente trabalho na Congregação de Nossa Senhora – Notre Dame,
          desenvolvendo soluções utilizadas por múltiplas unidades da instituição,
          utilizando tecnologias como Laravel, Vue.js, SQL e Docker.

          Também estou concluindo o Bacharelado em Ciência da Computação pela
          Universidade de Passo Fundo.
        </p>
        <div id="welcomeTextLocationText">
          <i className="bi-geo-alt-fill icons"></i>
          <p>Passo Fundo / Brasil</p>
        </div>
        <div id="welcomeTextLinks">
          <Link href="https://github.com/muriloklein" target="_blank">
            <i className="bi-github icons"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/murilo-klein/"
            target="_blank"
          >
            <i className="bi-linkedin icons"></i>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={ProfileImg}
          alt="Foto de perfil"
          id="profileImg"
          width={600}
          height={350}
        />
      </div>
    </section>
  );
};

export default SectionWelcome;
