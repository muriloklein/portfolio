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
            experiências que são essenciais para o meu desenvolvimento como
            profissional.
          </p>
          <p className="aboutP" id="segAboutP">
            Eu comecei minha jornada como desenvolvedor em 2022, realizando
            cursos e projetos por conta própria e de maneira independente, então
            em 2023 ingressei no curso de ciência da computação na Universidade
            de Passo Fundo onde estou até hoje atualmente no quinto semestre.
            Desde o inicio me dedicando muito a aprender para contribuir de
            maneira profissional.
          </p>
          <p className="aboutP" id="terAboutP">
            Atualmente as linguagens que eu trabalho são HTML5, CSS3, JavaScript
            e PHP com foco no framework CodeIgniter, também usando outras
            ferramentas como BootStrap, Docker, Git e banco de dados SQL. Além
            desses conhecimentos já realizei cursos de TypeScript, react,
            Next.js, Node.Js, Sass (Esse portifólio foi todo desenvolvido nessas
            linguagens e frameworks que acabei de citar), na faculdade aprendi
            programação em Python, C++ e o tenebroso Java.
          </p>
          <p className="aboutP" id="quarAboutP">
            Agora fora da área da programação eu também tenho uma série de
            hobbies por exemplo, eu adoro praticar esportes como correr e jogar
            futebol, vou diariamente na academia e além disso também gosto
            bastante de estudar idiomas, atualmente me considero em um nivel bem
            avançado de inglês e espanhol. No momento estou começando a aprender
            francês.
          </p>
          <p className="aboutP" id="quinAboutP">
            Aqui vão mais algumas informações:
          </p>
          <ul className="aboutP" id="aboutUl">
            <li id="liUm">Tenho certificação de dev full stack</li>
            <li id="liDois">Dev júnior</li>
            <li id="liTres">Participo de camps. de programação</li>
            <li id="liQuatro">Programming is ma passion</li>
          </ul>
          <p className="aboutP" id="sexAboutP">
            E esse foi um resumo sobre mim espero que tenho se interessado! 😉
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
