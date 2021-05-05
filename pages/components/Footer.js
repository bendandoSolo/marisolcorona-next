import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">
      <div className="pt-4 mt-5 pb-1">
        <a
          className="btn btn-outline-white me-2"
          href="/"
          alt="home"
          target="_blank"
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
        <a
          className="btn btn-primary2"
          href="mailto:marisol@marisolcorona.com?Subject=Consulta%del%sitio%web"
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
      </div>
      <div className="center-children py-3">
        <img
          src="/images/logoTrimPink.png"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <div className="pb-2 mb-2">
        <a
          href="https://www.facebook.com/marisolcoronapsicologa/"
          target="_blank"
        >
          <i className="fab fa-facebook-f me-3 white-hover-primary"></i>
        </a>
        <a
          href="https://tinyurl.com/yb73w2lh"
          target="_blank"
          style={{
            width: "207px",
            height: "50px",
            paddingBottom: "0px",
            paddingTop: "15px",
          }}
        >
          <i className="fas fa-users me-3 white-hover-primary"></i>
        </a>

        <a
          href="https://www.instagram.com/marisol.corona_psicologa/"
          target="_blank"
          style={{
            width: "207px",
            height: "50px",
            paddingBottom: "0px",
            paddingTop: "15px",
          }}
        >
          <i className="fab fa-instagram white-hover-primary"></i>
        </a>
      </div>

      <div className="footer-copyright py-3">
        <a
          href="https://bendando.com/"
          className="bendando-link"
          target="_blank"
        >
          Created by Bendando
        </a>
      </div>
    </footer>
  );
};

export default Footer;
