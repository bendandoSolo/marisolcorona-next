import Link from "next/link";

const Banner = ({ text, smallText, button, webp, webpM, bgImg }) => {
  return (
    <div className="bg-header">
      <picture>
        <source srcset={webpM} type="image/webp" media="(max-width: 767px)" />
        <source srcset={webp} type="image/webp" />
        <source srcset={bgImg} type="image/jpg" />
        <img
          src={bgImg}
          alt={text}
          style={{
            width: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
            objectPosition: "top",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
      </picture>
      <div className="overlay"></div>
      <div className="bg-text">
        <div className="text-center intro">
          {text && (
            <h1 className="mb-3 mx-5">
              <strong>{text}</strong>
            </h1>
          )}
          {smallText && (
            <div className="row justify-content-center sub-text">
              <p className="mb-3 text-white col-md-7 mb-4">
                <strong>{smallText}</strong>
              </p>
            </div>
          )}

          {button && (
            <div className="row justify-content-center">
              <div className="col-md-2 mx-4">
                <Link href="#aprende-mas">
                  <button
                    className="btn btn-outline-white my-2"
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
              </div>
              <div className="col-md-2 mx-4">
                <Link href="https://calendly.com/marisol-corona/entrevista">
                  <a target="_blank">
                    <button
                      className="btn btn-primary2 my-2"
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
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
