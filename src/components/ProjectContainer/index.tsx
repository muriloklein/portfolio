import Link from "next/link";
import Image from "next/image";
import GestorImg from "/public/gestorDeEstoqueImg.png";
import NotreDameImg from "/public/logo-notre-dame.jpeg";
import TarefasImg from "/public/listaDeTarefasImg.png";
import ClimaImg from "/public/siteDoClimaImg.png";
import CalculadoraImg from "/public/calculadoraImg.png";
import VelhaImg from "/public/jogoDaVelhaImg.png";
import PortifolioImg from "/public/portifolioImg.png";

const projectsList = [
  {
    name: "Desenvolvedor de Sistemas",
    description:
      "Trabalho como desenvolvedor de sistemas júnior na Congregação de Nossa Senhora - Notre Dame, comecei nesse cargo em março de 2024 e desde então tenho aprendido muito e ganho muita experiência no desenvolvimento de aplicações.",
    img: NotreDameImg,
    techs: ["HTML", "CSS", "PHP", "CodeIgniter", "Bootstrap", "Docker", "GIT"],
    link: "https://www.linkedin.com/company/congrega%C3%A7%C3%A3o-de-nossa-senhora/posts/?feedView=all",
  },
  {
    name: "Gestor de Estoque",
    description:
      "Uma aplicação web SPA (Single Page Application) desenvolvida com HTML, Sass, Bootstrap,  JavaSript, React, React Router que feita para ajudar no controle de estoque de lojas de varejo, ou outros comércios, com interface bem simples e intuitiva de fácil manejo e entendimento, com armazenamento de dados feito em Local Storage.",
    img: GestorImg,
    techs: ["HTML", "Sass", "JavaScript", "React", "Bootstrap"],
    link: "https://stock-manager-gray.vercel.app/",
  },
  {
    name: "Este Site",
    description:
      "Um Site simples SPA (Single Page Application) desenvolvido desenvolvida com HTML, Sass, Bootstrap,  TypeScript, React e Next para mostrar minhas habilidades como desenvolvedor full-stack além de formas de entrar em contato e me encontrar nas redes, com algumas funcionalidades para também demonstrar um pouco do que sei fazer",
    img: PortifolioImg,
    techs: ["HTML", "Sass", "TypeScript", "React", "Next.js", "Bootstrap"],
    link: "https://tic-tac-toe-gules-three.vercel.app/",
  },
  {
    name: "Lista de Tarefas",
    description:
      "Um projeto de uma lista de tarefas semanal SPA (Single Page Application) desenvolvido com HTML, CSS, Bootstrap, TypeScript, React e Next.js, feito para o usuário anotar suas atividades semanais de forma simples, intuitiva e moderna com armazenamento de dados feito através do Local Storage do navegador.",
    img: TarefasImg,
    techs: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Bootstrap"],
    link: "https://to-do-list-ochre-kappa-53.vercel.app/",
  },
  {
    name: "Site do Clima",
    description:
      "Um Site SPA (Single Page Application) desenvolvido com HTML, Sass, Bootstrap, TypeScript, React, Next.js com para com ajuda da API OpenWeather buscar informações do tempo da cidade que o usuário desejar, com design bem simples e intuitivo.",
    img: ClimaImg,
    techs: ["HTML", "Sass", "TypeScript", "React", "Next.js", "Bootstrap"],
    link: "https://weather-forecast-rose-three.vercel.app/",
  },
  {
    name: "Calculadora",
    description:
      "Um projeto SPA (Single Page Application) desenvolvido com HTML, CSS e JavaScript de uma calculadora simples para realisar calculos matemáticos de forma simples e intuitiva com tratamento de erros e outras funcionalidades mais.",
    img: CalculadoraImg,
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://calculator-delta-silk.vercel.app/",
  },
];

const ProjectContainer = () => {
  return (
    <>
      {projectsList.map((project) => (
        <div className="projects" key={project.name}>
          <div className="imgPart">
            <Link href={project.link} target="_blank">
              <Image
                src={project.img}
                alt={project.name}
                height={200}
                width={200}
                className="projectImg"
              />
            </Link>
          </div>
          <div className="textPart">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="spanPart">
              {project.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </p>
            <Link href={project.link} target="_blank">
              <i className="bi-box-arrow-up-right icons"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectContainer;
