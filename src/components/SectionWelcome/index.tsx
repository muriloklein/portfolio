import Link from "next/link";
import Image from "next/image";
import ProfileImg from "/public/profile.jpeg";

const SectionWelcome = () => {
  return (
    <section id="welcomeSection">
      <div id="welcomeText">
        <h1 id="welcomeTextTitle">Bem vindo ao meu Portifólio 👋</h1>
        <p id="welcomeTextParagraph">
          Me chamo Murilo, sou um dev Full-Stack apaixonado por transformar
          ideias em realidade, combinando habilidades técnicas e criatividade.
          Estou sempre em busca de novas oportunidades para aperfeiçoar minhas
          habilidades e trabalhar em projetos desafiadores.
        </p>
        <div id="welcomeTextLocationText">
          <i className="bi-geo-alt-fill icons"></i>
          <p>Passo Fundo / Brasil</p>
        </div>
        <div id="welcomeTextOnlineText">
          <div></div>
          <p>Disponível para novos projetos</p>
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
          height={500}
        />
      </div>
    </section>
  );
};

export default SectionWelcome;
