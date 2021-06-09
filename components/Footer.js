import Link from "next/link";

const Footer = () => {
  return (
    <footer className="page-footer text-center font-small mt-4">
      <div className="pt-4 mt-5 pb-1">
        <Link href="/">
          <button
            className="btn btn-outline-white btn-md mx-2 mb-2"
            alt="home"
            role="button"
            style={{
              width: "207px",
              height: "50px",
              paddingBottom: "0px",
              paddingTop: "0",
            }}
          >
            Aprende más
            <i className="fas fa-play ms-2"></i>
          </button>
        </Link>
        <Link href="mailto:marisol@marisolcorona.com?Subject=Consulta%del%sitio%web">
          <button
            className="btn btn-primary2 btn-md mx-2 mb-2"
            target="_blank"
            role="button"
            style={{
              width: "207px",
              height: "50px",
              paddingBottom: "0px",
              paddingTop: "0",
            }}
          >
            Reservar ahora
            <i className="fas fa-book-open ms-2"></i>
          </button>
        </Link>
      </div>
      <div className="center-children py-3">
        <img
          src="/images/footer/footer_logo.png"
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
      <div className="py-1 pt-3">
          <a href="https://bendando.com/" className="bendando-link" target="_blank">
            Created by Bendando
          </a>
      </div>
    </footer>
  );
};

export default Footer;
