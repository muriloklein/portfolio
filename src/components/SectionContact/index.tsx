import Link from "next/link";

const SectionContact = () => {
  return (
    <section id="contactSection">
      <h3 className="SectionsTitle">Entrar em contato</h3>
      <p className="contactSmallText" id="contactSmallText01">
        Você pode me chamar em:
      </p>
      <div id="contactDiv">
        <p className="contactText">
          <i className="bi-envelope icons"></i>{" "}
          <Link
            href="mailto:murilo.kkleinn@gmail.com"
            target="_blank"
            className="contactTextLinks"
          >
            murilo.kkleinn@gmail.com
          </Link>
          <button className="copyButton">
            <i className="bi-copy icons" id="emailButton"></i>
          </button>
        </p>
        <p className="contactText">
          <i className="bi-telephone icons"></i>
          <Link
            href=" https://wa.me/5554991487046"
            className="contactTextLinks"
            target="_blank"
          >
            +55 (54) 99148-7046
          </Link>
          <button className="copyButton">
            <i className="bi-copy icons" id="phoneButton"></i>
          </button>
        </p>
      </div>
      <p className="contactSmallText" id="contactSmallText02">
        Também pode me encotrar nessas plataformas!
      </p>
      <div className="socialLinks">
        <Link href="https://github.com/muriloklein" target="_blank">
          <i className="bi-github icons contactLinks"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/murilo-klein/" target="_blank">
          <i className="bi-linkedin icons contactLinks"></i>
        </Link>
      </div>
    </section>
  );
};

export default SectionContact;
