import Link from "next/link";

const Footer = () => {
  return (
    <footer className="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">
      <div className="pt-4 mt-5 pb-1">
        <Link href="/">
          <a
            className="btn btn-outline-white mx-2 mb-2"
            alt="home"
            style={{
              width: "207px",
              height: "50px",
              paddingBottom: "0px",
              paddingTop: "15px",
            }}
            role="button"
          >
            Aprende más
            <i className="fas fa-play ms-2"></i>
          </a>
        </Link>
        <Link href="mailto:marisol@marisolcorona.com?Subject=Consulta%del%sitio%web">
          <a
            className="btn btn-primary2 mb-2"
            target="_blank"
            style={{
              width: "207px",
              height: "50px",
              paddingBottom: "0px",
              paddingTop: "15px",
            }}
            role="button"
          >
            Reservar ahora
            <i className="fas fa-book-open ms-2"></i>
          </a>
        </Link>
      </div>
      <div className="center-children py-3">
        <img
          src="/images/LogoTrimPink.png"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <div className="pb-2 mb-2">
        <Link href="https://www.facebook.com/marisolcoronapsicologa/">
          <a target="_blank">
            <i className="fab fa-facebook-f me-3 white-hover-primary"></i>
          </a>
        </Link>
        <Link href="https://tinyurl.com/yb73w2lh">
          <a target="_blank">
            <i className="fas fa-users me-3 white-hover-primary"></i>
          </a>
        </Link>
        <Link href="https://www.instagram.com/marisol.corona_psicologa/">
          <a target="_blank">
            <i className="fab fa-instagram white-hover-primary"></i>
          </a>
        </Link>
      </div>
      <div className="footer-copyright py-3">
        <Link href="https://bendando.com/">
          <a className="bendando-link" target="_blank">
            Created by Bendando
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
