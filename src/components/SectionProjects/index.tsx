import Link from "next/link";
import ProjectContainer from "../ProjectContainer";

const SectionProject = () => {
  return (
    <section id="projectsSection">
      <h3 className="SectionsTitle">Projetos</h3>
      <p id="projectsSectionText">Alguns dos projetos que eu construi:</p>
      <div id="projectsList">
        <ProjectContainer />
        <Link href="projectsPage.html" target="_blank">
          <i className="bi-plus-circle icons"></i>
        </Link>
      </div>
    </section>
  );
};

export default SectionProject;
