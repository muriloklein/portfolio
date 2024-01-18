import TableSkills from "../TableSkills";

const SectionSkills = () => {
  return (
    <section id="skillsSection">
      <h3 className="SectionsTitle">Habilidades</h3>
      <p id="skillsSectionText">
        Tecnologias e ferramentas que tenho mais afinidade:
      </p>
      <TableSkills />
    </section>
  );
};

export default SectionSkills;
