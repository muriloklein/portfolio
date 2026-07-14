import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import IconPhp from "/public/php-logo.png";
import IconLaravel from "/public/icon-laravel.svg";
import IconCodeIgniter from "/public/codeIgniter-logo.png";
import IconSql from "/public/sql-logo.png";
import IconVuejs from "/public/icon-vuejs.svg";
import IconInertia from "/public/icon-inertiajs.svg";
import IconJS from "/public/icon-javascript.svg";
import IconHTML from "/public/icon-html.webp";
import IconCSS from "/public/icon-css.svg";
import IconBoot from "/public/icon-bootstrap.png";
import IconMysql from "/public/icon-mysql.svg";
import IconMssql from "/public/icon-mssql.svg";
import IconDocker from "/public/docker-logo.png";
import IconLinux from "/public/icon-linux.svg";
import IconGit from "/public/icon-git.png";

type SkillItem = {
  name: string;
  img?: StaticImageData;
  biIcon?: string; // classe de ícone do Bootstrap Icons, usada quando não há logo oficial
  link?: string;
};

type SkillCategory = {
  title: string;
  description: string;
  items: SkillItem[];
};

const featuredStack: SkillItem[] = [
  { name: "Laravel", img: IconLaravel },
  { name: "PHP", img: IconPhp },
  { name: "Vue.js", img: IconVuejs },
  { name: "SQL", img: IconSql },
  { name: "Docker", img: IconDocker },
  { name: "TOTVS RM", biIcon: "bi-building" },
];

const categories: SkillCategory[] = [
  {
    title: "Backend",
    description:
      "Desenvolvimento de sistemas corporativos, APIs e integrações com plataformas externas.",
    items: [
      { name: "PHP", img: IconPhp },
      { name: "Laravel", img: IconLaravel },
      { name: "CodeIgniter", img: IconCodeIgniter },
      { name: "SQL", img: IconSql },
      { name: "REST APIs", biIcon: "bi-diagram-3-fill" },
    ],
  },
  {
    title: "Frontend",
    description:
      "Construção de interfaces modernas, dashboards e aplicações web responsivas.",
    items: [
      { name: "Vue.js", img: IconVuejs },
      { name: "Inertia.js", img: IconInertia },
      { name: "JavaScript", img: IconJS },
      { name: "HTML", img: IconHTML },
      { name: "CSS", img: IconCSS },
      { name: "Bootstrap", img: IconBoot },
    ],
  },
  {
    title: "Banco de Dados e Infraestrutura",
    description: "Modelagem de dados, containerização e gerenciamento de ambientes.",
    items: [
      { name: "MySQL", img: IconMysql },
      { name: "SQL Server", img: IconMssql },
      { name: "Docker", img: IconDocker },
      { name: "Linux", img: IconLinux },
      { name: "Git", img: IconGit },
    ],
  },
];

const integrations = ["TOTVS RM", "Gupy", "Contato Seguro", "Urânia", "APIs REST"];

const SkillsCategories = () => {
  return (
    <div id="skillsCategoriesWrapper">
      <div id="featuredStack">
        <p id="featuredStackLabel">Principais tecnologias</p>
        <div id="featuredStackList">
          {featuredStack.map((tech) => (
            <div className="featuredStackItem" key={tech.name}>
              {tech.img ? (
                <Image src={tech.img} alt={tech.name} width={36} height={36} />
              ) : (
                <i className={`bi ${tech.biIcon} icons`}></i>
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="skillsCategoriesGrid">
        {categories.map((category) => (
          <div className="skillCategoryCard" key={category.title}>
            <h4>{category.title}</h4>
            <p className="skillCategoryDescription">{category.description}</p>
            <div className="skillCategoryItems">
              {category.items.map((item) => (
                <div className="skillCategoryItem" key={item.name}>
                  {item.img ? (
                    <Image src={item.img} alt={item.name} width={32} height={32} />
                  ) : (
                    <i className={`bi ${item.biIcon} icons`}></i>
                  )}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skillCategoryCard" id="integrationsCard">
        <h4>Sistemas Corporativos e Integrações</h4>
        <p className="skillCategoryDescription">
          Automação de processos e integração entre sistemas empresariais.
        </p>
        <div id="integrationsTags">
          {integrations.map((name) => (
            <span className="integrationTag" key={name}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <p id="skillsSecondaryNote">
        Também tenho experiência com{" "}
        <Link
          href="https://github.com/muriloklein?tab=repositories"
          target="_blank"
        >
          React, Next.js e TypeScript
        </Link>{" "}
        através de projetos pessoais, como este próprio portfólio.
      </p>
    </div>
  );
};

export default SkillsCategories;
