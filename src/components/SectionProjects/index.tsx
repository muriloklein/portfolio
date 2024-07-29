import Link from "next/link";
import ProjectContainer from "../ProjectContainer";

const SectionProject = () => {
  return (
    <section id="projectsSection">
      <h3 className="SectionsTitles">Experiência</h3>
      <p id="projectsSectionText">
        Essa é minha experiência como dev e alguns projetos que realizei:
      </p>
      <div id="projectsList">
        <ProjectContainer />
      </div>
      <Link
        href="https://github.com/muriloklein?tab=repositories"
        target="_blank"
      >
        <i className="bi-plus-circle icons"></i>
      </Link>
    </section>
  );
};

export default SectionProject;
