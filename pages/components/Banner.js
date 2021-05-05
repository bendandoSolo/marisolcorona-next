import Link from "next/link";

const Banner = ({ text, smallText, button, bgImg, page }) => {
  return (
    <div
      className="bg-header"
      id={page}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="overlay"></div>
      <div className="bg-text">
        <div className="text-center intro">
          {text && <h1 className="mb-3">{text}</h1>}
          <div className="row justify-content-center">
            {smallText && (
              <p className="mb-3 text-white col-md-6">{smallText}</p>
            )}
          </div>

          {button && (
            <>
              <Link href="#aprende-mas">
                <button
                  className="btn mx-2 mt-4 py-3 px-5 text-white btn btn-outline-white"
                  role="button"
                >
                  Aprende más
                  <i className="fas fa-play ms-2"></i>
                </button>
              </Link>
              <Link href="https://calendly.com/marisol-corona/entrevista">
                <a target="_blank">
                  <button
                    className="btn mx-2 mt-4 py-3 px-5 btn-primary2"
                    role="button"
                  >
                    Reservar ahora
                    <i className="fas fa-book-open ms-2"></i>
                  </button>
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
