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
          <h2>Algumas curiosidades sobre mim</h2>
          <p className="aboutP" id="primeiroAboutP">
            Sou autoproclamado full-stack designer 'especializado' em React.js &
            Node.js (com muito a aprender ainda). Sou um entusiasta em trazer
            aspectos técnicos e digitais a vida. User experience, pixel
            designer, e clean code, legível, códigos altamente performáveis são
            o que importa.
          </p>
          <p className="aboutP" id="segAboutP">
            Eu comecei minha jornada como desenvolvedor web em 2022, desde
            então, continuei a me aperfeiçoar e crescer como um desenvolvedor,
            aceitando desafios e aprendendo as últimas tecnologias ao longo do
            caminho. Agora, após 1 ano desde que comecei minha carreira como
            desenvolvedor, estou em busca do meu primeiro emprego na área,
            crendo já ter conhecimentos necessários em React.js, TypeScript,
            Next.js e mais.
          </p>
          <p className="aboutP" id="terAboutP">
            Sou bem criativo e gosto de trabalhar em produtos end-to-end, gosto
            de trabalhar em equipe e estou disposto a aprender muito com meus
            colegas de trabalho.
          </p>
          <p className="aboutP" id="quarAboutP">
            Desde 2022 venho fazendo cursos e me aperfeiçoando na área,
            aprendendo sobre as últimas tecnologias e me capacitando para
            conseguir o primeiro emprego, creio que já tenho capacidade para me
            candidatar a vagas de júnior.
          </p>
          <p className="aboutP" id="quinAboutP">
            Mais algumas poucas curiosidades sobre mim:
          </p>
          <ul className="aboutP" id="aboutUl">
            <li id="liUm">
              Cursando Bacharelado em Ciências da computação na UPF
            </li>
            <li id="liDois">Livre para empregos Full time</li>
            <li id="liTres">Aluno Focado</li>
            <li id="liQuatro">Desenvolvedor júnior</li>
          </ul>
          <p className="aboutP" id="sexAboutP">
            Uma última coisa, estou disponível para trabalho, então sintas-se a
            vontade para entrar em contato! 😉
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
