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
          <i className="bi-envelope icons"></i> murilo.kkleinn@gmail.com
          <button className="copyButton">
            <i className="bi-copy icons" id="emailButton"></i>
          </button>
        </p>
        <p className="contactText">
          <i className="bi-telephone icons"></i>+55 (54) 99148-7046
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
          <i className="bi-github icons"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/murilo-klein/" target="_blank">
          <i className="bi-linkedin icons"></i>
        </Link>
      </div>
    </section>
  );
};

export default SectionContact;
