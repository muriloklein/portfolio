import TableSkills from "../TableSkills";

const SectionSkills = () => {
  return (
    <section id="skillsSection">
      <h3 className="SectionsTitles">Habilidades</h3>
      <p id="skillsSectionText">
        Algumas das Tecnologias e ferramentas que tenho afinidade:
      </p>
      <TableSkills />
      <p id="skillsSectionTextTwo">Na real tem muitas outras.</p>
    </section>
  );
};

export default SectionSkills;
