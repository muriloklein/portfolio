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
import IconSql from "/public/sql-logo.png";
import IconDocker from "/public/docker-logo.png";
import IconPhp from "/public/php-logo.png";
import IconCodeIgniter from "/public/codeIgniter-logo.png";

import Image from "next/image";
import Link from "next/link";

const techList = [
  {
    name: "HTML",
    img: IconHTML,
    link: "https://drive.google.com/file/d/1PDZjFtse_GLoHvqu_0hkMdxt9U4YORVV/view",
  },
  {
    name: "CSS",
    img: IconCSS,
    link: "https://drive.google.com/file/d/1S3aELIMfWmOTXDBoTpToYPRjfw-YDvqO/view",
  },
  {
    name: "JS",
    img: IconJS,
    link: "https://drive.google.com/file/d/1FPwb8eRO7feOPJOTNPzT6JbM7ENK4z4y/view",
  },
  {
    name: "TS",
    img: IconTS,
    link: "https://drive.google.com/file/d/1C9aqk-c4EuokKclceaLmMsN2yEH0ZH83/view",
  },
  {
    name: "React",
    img: IconReact,
    link: "https://drive.google.com/file/d/1t4NMVWct5TXDXItHTk6V6RC1aF2Gg6xv/view",
  },
  {
    name: "Sass",
    img: IconSass,
    link: "https://drive.google.com/file/d/15Tg3jk2yL6E3bQ_9p11oyJoOKi_4tMUc/view",
  },
  {
    name: "Bootstrap",
    img: IconBoot,
    link: "https://drive.google.com/file/d/1VP0P3b3H3DnLUPMwdNPKEdstw1LJQL4E/view",
  },
  {
    name: "Next.Js",
    img: IconNext,
    link: "https://drive.google.com/file/d/1lqO8teBw8apZtplV0sv8KD40UPy4gAy0/view",
  },
  {
    name: "Node.Js",
    img: IconNode,
    link: "https://drive.google.com/file/d/1rAkSR2BDQlKG4WAVjBcRL_U6oMXk_ESk/view",
  },
  {
    name: "Git",
    img: IconGit,
    link: "https://drive.google.com/file/d/1UuJG7IBRUlJyTRIt8S-jbnaMAuZwJ6HS/view",
  },
  {
    name: "PHP",
    img: IconPhp,
    link: "#",
  },
  {
    name: "CodeIgniter",
    img: IconCodeIgniter,
    link: "#",
  },
  {
    name: "Docker",
    img: IconDocker,
    link: "#",
  },
  {
    name: "SQL",
    img: IconSql,
    link: "https://drive.google.com/file/d/1ZNC1eYXcwJSD0j8d9T16cZq75x_jYuZx/view",
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
