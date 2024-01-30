import Link from "next/link";
import ProjectContainer from "../ProjectContainer";

const SectionProject = () => {
  return (
    <section id="projectsSection">
      <h3 className="SectionsTitles">Projetos</h3>
      <p id="projectsSectionText">Alguns dos projetos que eu desenvolvi:</p>
      <div id="projectsList">
        <ProjectContainer />
        <Link
          href="https://github.com/muriloklein?tab=repositories"
          target="_blank"
        >
          <i className="bi-plus-circle icons"></i>
        </Link>
      </div>
    </section>
  );
};

export default SectionProject;
