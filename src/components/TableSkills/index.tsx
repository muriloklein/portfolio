import { Col, Row } from "reactstrap";
import IconHTML from "/public/icon-html.webp";
import IconCSS from "/public/icon-css.svg";
import IconReact from "/public/icon-react.svg";
import IconJS from "/public/icon-javascript.svg";
import IconNext from "/public/icon-nextjs.png";
import IconNode from "/public/icon-nodejs.svg";
import IconSass from "/public/icon-sass.svg";
import IconBoot from "/public/icon-bootstrap.png";
import IconTS from "/public/icon-typescript.png";
import IconGit from "/public/icon-git.png";
import IconSql from "/public/icon-sql.png";

import Image from "next/image";
import Link from "next/link";

const techList = [
  {
    name: "HTML",
    img: IconHTML,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    name: "CSS",
    img: IconCSS,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "JS",
    img: IconJS,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/Javascript",
  },
  {
    name: "TS",
    img: IconTS,
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React",
    img: IconReact,
    link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  },
  {
    name: "Sass",
    img: IconSass,
    link: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    img: IconBoot,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Next.Js",
    img: IconNext,
    link: "https://nextjs.org/",
  },
  {
    name: "Node.Js",
    img: IconNode,
    link: "https://nodejs.org/en",
  },
  {
    name: "SQL",
    img: IconSql,
    link: "https://pt.wikipedia.org/wiki/SQL",
  },
  {
    name: "Git",
    img: IconGit,
    link: "https://git-scm.com/",
  },
];

const TableSkills = () => {
  return (
    <Row id="sckillsTable" className="d-grid">
      {techList.map((tech) => (
        <Col key={tech.name} className="tableItems">
          <Link href={tech.link} target="_blank">
            <Image src={tech.img} alt={tech.name} height={100} width={100} />
            <p>{tech.name}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default TableSkills;
