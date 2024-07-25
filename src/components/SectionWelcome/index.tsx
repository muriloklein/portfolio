import Link from "next/link";
import Image from "next/image";
import ProfileImg from "/public/profile.jpeg";

const SectionWelcome = () => {
  return (
    <section id="welcomeSection">
      <div id="welcomeText">
        <h1 id="welcomeTextTitle">Bem vindo ao meu Portifólio 👋</h1>
        <p id="welcomeTextParagraph">
          Me chamo Murilo, atualmente trabalho como desenvolvedor de sistemas, e
          gosto muito dessa área full-stack, adoro novos desafios e estou sempre
          em busca de mais aprendizados procurando me aperfeiçoar e especializar
          cada vez mais nessa área da programação que eu gosto tanto.
        </p>
        <div id="welcomeTextLocationText">
          <i className="bi-geo-alt-fill icons"></i>
          <p>Passo Fundo / Brasil</p>
        </div>
        <div id="welcomeTextOnlineText">
          <div></div>
          <p>Disponível para contato</p>
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
