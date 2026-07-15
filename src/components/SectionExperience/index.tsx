const experienceCards = [
  {
    emoji: "📈",
    title: "Evolução profissional",
    text: "Promovido a Desenvolvedor de Sistemas II após apenas 16 meses, assumindo maior autonomia técnica e responsabilidades em projetos estratégicos.",
  },
  {
    emoji: "🏗️",
    title: "Desenvolvimento de sistemas",
    text: "Desenvolvimento de sistemas corporativos voltados ao planejamento estratégico e controle orçamentário.",
  },
  {
    emoji: "🔗",
    title: "Integrações empresariais",
    text: "Integrações entre TOTVS RM, Gupy, Contato Seguro e Urânia, automatizando processos internos.",
  },
  {
    emoji: "🔄",
    title: "Modernização de sistemas",
    text: "Migração de aplicações legadas de CodeIgniter para Laravel, aumentando a segurança e a manutenibilidade.",
  },
];

const SectionExperience = () => {
  return (
    <section id="experienceSection">
      <h3 className="SectionsTitles">Experiência Profissional</h3>
      <p id="experienceIntro">
        Atualmente atuo como Desenvolvedor de Sistemas II na Congregação de
        Nossa Senhora – Notre Dame, onde participo do desenvolvimento e
        evolução de sistemas corporativos, integrações entre plataformas e
        modernização de aplicações internas.
      </p>
      <div id="experienceCardsGrid">
        {experienceCards.map((card) => (
          <div className="experienceCard" key={card.title}>
            <span className="experienceCardEmoji">{card.emoji}</span>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionExperience;
