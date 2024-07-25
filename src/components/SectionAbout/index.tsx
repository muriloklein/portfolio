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
            Sou programador desenvolvedor full-stack, atualmente trabalho como
            desenvolvedor de sistemas na Congragação de Nossa Senhora - Notre
            Dame presencialmente em Passo Fundo/RS, comecei nesse cargo em março
            de 2024 e a cada dia venho aprendendo coisas novas e tendo novas
            experiências que são essienciais para o meu desenvolvimento como
            profissional.
          </p>
          <p className="aboutP" id="segAboutP">
            Eu comecei minha jornada como desenvolvedor em 2022, realizando
            cursos e projetos por conta própria e de maneira independente, então
            em 2023 ingressei no curso de ciência da computação na Universidade
            de Passo Fundo onde estou até hoje atualmente no quarto semestre.
            Desde o inicio me dedicando muito a aprender e me desenvolver
            contribuir de maneira profissional.
          </p>
          <p className="aboutP" id="terAboutP">
            Atualmente as linguagens que eu trabalho são HTML5, CSS3, JavaScript
            e PHP com foco no framework CodeIgniter, além de usar outras
            ferramentas como BootStrap, Docker, Git e também muito banco de
            dados SQL. Mas além desses conhecimentos já realizei cursos de
            Typescrip, react, Next.js, Node.Js, Sass (Esse portifólio foi todo
            desenvolvido nessas linguagens e frameworks que acabei de citar), e
            também na faculdade acabei por aprender programação em Python, C++ e
            também o tenebroso Java hahaha.
          </p>
          <p className="aboutP" id="quarAboutP">
            Agora fora da área da programação eu também tenho uma série de
            hobbies por exemplo, eu adoro praticar esportes tipo eu vou
            diariamente na academia e adoro correr e jogar futebol também, além
            disso também gosto bastante de estudar idiomas, atualmente me
            considero em um nivel bem avançado de inglês e espanhol e estou
            agora começando a aprender francês, também gosto muito de ler e
            assistir filmes e séries.
          </p>
          <p className="aboutP" id="quinAboutP">
            Aqui vão mais algumas informações:
          </p>
          <ul className="aboutP" id="aboutUl">
            <li id="liUm">Tenho certificação de dev full stack</li>
            <li id="liDois">Me considero um dev júnior</li>
            <li id="liTres">Participo de camp de programação</li>
            <li id="liQuatro">Programming is ma passion</li>
          </ul>
          <p className="aboutP" id="sexAboutP">
            E esse foi um resuminho sobre mim espero que tenho se interessado!
            😉
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
