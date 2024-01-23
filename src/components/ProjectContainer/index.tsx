import Link from "next/link";
import Image from "next/image";
import GestorImg from "/public/gestorDeEstoqueImg.png";

const projectsList = [
  {
    name: "Gestor de Estoque",
    description:
      "Uma aplicação web desenvolvida com HTML, Sass, JavaSript, React, React Router que feita para ajudar no controle de estoque de lojas de varejo, ou outros comércios, com interface bem simples e intuitiva de fácil manejo e entendimento.",
    img: GestorImg,
    techs: ["HTML", "Sass", "JavaScript", "React", "ReactRouter"],
    link: "https://stock-manager-gray.vercel.app/",
  },
  {
    name: "ccc",
    description: "ccc",
    img: GestorImg,
    techs: ["ccc", "bbb"],
    link: "ccc",
  },
  {
    name: "eee",
    description: "eee",
    img: GestorImg,
    techs: ["eee", "bbb"],
    link: "eee",
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
                height={100}
                width={100}
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
