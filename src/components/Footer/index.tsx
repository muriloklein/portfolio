const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer id="footer">
      <p id="footerText">&copy; { year } | Designed and coded by Murilo Klein</p>
    </footer>
  );
};

export default Footer;
