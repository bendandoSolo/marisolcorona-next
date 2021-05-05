import Link from "next/link";

const Banner = ({ text, smallText, button, bgImg }) => {
  return (
    <div className="bg-image banner">
      <img src={bgImg} className="w-100" alt="Sample" />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="header-text container">
            <div className="text-center intro">
              {text && <h1 className="mb-3">{text}</h1>}
              <div className="row justify-content-center">
                {smallText && (
                  <h5 className="mb-3 text-white col-md-4">{smallText}</h5>
                )}
              </div>

              {button && (
                <>
                  <button
                    className="btn mx-2 mt-4 py-3 px-5 text-white btn btn-outline-white"
                    href=""
                    role="button"
                  >
                    Aprende más
                    <i className="fas fa-play ms-2"></i>
                  </button>
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
      </div>
    </div>
  );
};

export default Banner;
