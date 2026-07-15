import Link from "next/link";
import Image from "next/image";
import PortfolioImg from "/public/portfolioImg.png";

const highlightedProject = {
  name: "Portfólio",
  description:
    "Meu portfólio pessoal, desenvolvido para apresentar minha trajetória, experiência profissional e projetos.",
  img: PortfolioImg,
  techs: ["React", "TypeScript", "Sass", "Vercel"],
  link: "https://portfolio-eight-sable-64.vercel.app/",
};

const ProjectContainer = () => {
  return (
    <div className="projects" key={highlightedProject.name}>
      <div className="imgPart">
        <Link href={highlightedProject.link} target="_blank">
          <Image
            src={highlightedProject.img}
            alt={highlightedProject.name}
            height={200}
            width={200}
            className="projectImg"
          />
        </Link>
      </div>
      <div className="textPart">
        <h2>{highlightedProject.name}</h2>
        <p>{highlightedProject.description}</p>
        <p className="spanPart">
          {highlightedProject.techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
        <Link href={highlightedProject.link} target="_blank">
          <i className="bi-box-arrow-up-right icons"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectContainer;
