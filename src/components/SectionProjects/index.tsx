import Link from "next/link";
import ProjectContainer from "../ProjectContainer";

const SectionProject = () => {
  return (
    <section id="projectsSection">
      <h3 className="SectionsTitles">Projetos Pessoais</h3>
      <p id="projectsSectionText">
        Além da minha experiência profissional, também desenvolvo projetos
        pessoais e acadêmicos para explorar novas tecnologias, praticar
        conceitos e expandir meus conhecimentos em desenvolvimento de
        software, arquitetura e ciência de dados.
      </p>
      <div id="projectsList">
        <ProjectContainer />
      </div>
      <p id="projectsSectionTextTwo">
        Você pode acessar todos os meus projetos e repositórios no GitHub.
      </p>
      <Link
        id="githubCtaButton"
        href="https://github.com/muriloklein?tab=repositories"
        target="_blank"
      >
        Ver projetos no GitHub <i className="bi-arrow-right icons"></i>
      </Link>
    </section>
  );
};

export default SectionProject;
