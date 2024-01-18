import Link from "next/link";
import Image from "next/image";

const projectsList = [
  {
    name: "aaa",
    description: "aaa",
    img: "aaa",
    techs: ["aaa", "bbb"],
    link: "aaa",
  },
  {
    name: "ccc",
    description: "ccc",
    img: "ccc",
    techs: ["ccc", "bbb"],
    link: "ccc",
  },
  {
    name: "eee",
    description: "eee",
    img: "eee",
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
            <Link href={project.link}>
              <i className="bi-box-arrow-up-right icons"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectContainer;
