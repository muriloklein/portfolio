import ProfileTwo from "/public/profileTwo.jpg";
import Image from "next/image";

const SectionAbout = () => {
  return (
    <section id="aboutSection">
      <h3 className="SectionsTitles">Sobre mim</h3>
      <div id="aboutDiv">
        <div id="aboutImgDiv">
          <Image
            src={ProfileTwo}
            alt="Foto de perfil 2"
            id="aboutImg"
            width={600}
            height={500}
          />
        </div>
        <div id="aboutTextDiv">
          <h2>Minha trajetória profissional</h2>
          <p className="aboutP" id="primeiroAboutP">
            Iniciei minha jornada com programação em 2022, desenvolvendo projetos próprios e estudando de forma independente. Em 2023, ingressei no curso de Ciência da Computação da Universidade de Passo Fundo e, em março de 2024, comecei minha carreira profissional como Desenvolvedor de Sistemas.
          </p>
          <p className="aboutP" id="segAboutP">
            Atualmente atuo como Desenvolvedor de Sistemas II na Congregação de Nossa Senhora – Notre Dame, participando do desenvolvimento de sistemas corporativos, integrações com TOTVS RM e da modernização de aplicações legadas.
          </p>
          <p className="aboutP" id="terAboutP">
            Meu foco principal está no ecossistema PHP, especialmente Laravel e CodeIgniter, além de Vue.js, SQL, Docker e APIs REST.
          </p>
          <p className="aboutP" id="quarAboutP">
            Além da tecnologia, mantenho uma rotina voltada ao desenvolvimento pessoal, conciliando a prática de esportes, como corrida e futebol, com treinos diários na academia. Também tenho grande interesse pelo aprendizado de idiomas e possuo nível avançado de inglês e espanhol.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
