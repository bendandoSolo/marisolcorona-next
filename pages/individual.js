// Next Links
import Head from "next/head";
//import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Banner from "../components/Banner";

export default function Individual() {
  return (
    <div>
      {/* <motion.div
      initial={{ x: "-100vw" }}
      animate={{
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    > */}
      <Head>
        <title>Individual | Marisol Corona</title>
        <meta
          name="description"
          content="Marisol Corona terapia individual: Su meta es ayudar a otras personas a salir adelante, sentirse mejor construyendo relaciones de pareja más sanas para encontrar su pareja ideal."
        />
        <meta
          name="keywords"
          content="Marisol Corona terapia individual: Su meta es ayudar a otras personas a salir adelante, sentirse mejor construyendo relaciones de pareja más sanas para encontrar su pareja ideal."
        />
      </Head>
      <Banner
        text="Terapia Individual"
        bgImg="images/banners/individual_bg.jpg"
        webp="images/banners/individual_bg.webp"
        webpM="images/banners/individual_mb.webp"
      />
      <div className="container">
        <main className="mt-5 pt-5" id="services">
          <div className="container">
            <section data-aos="zoom-in" data-aos-duration="750">
              <h2 className="mb-4 text-center">
                <strong>Sesiones terapia individual y coaching</strong>
              </h2>
              <p className="mb-4 text-center">
                <strong>
                  La terapia individual que yo uso la enriquezco con técnicas de
                  coaching para hacerla mucho más completa y efectiva es un
                  proceso a través del cual trabajaremos uno a en un ambiente
                  seguro y confidencial para explorar tus sentimientos,
                  creencias y comportamientos, trabajar con recuerdos
                  desafiantes o inadecuados, identificar aspectos de tu vida que
                  quieres cambiar con el fin de entenderse mejor a ti mismo y a
                  los otros, establecer metas personales, y trabajar hacia el
                  cambio deseado.
                </strong>
              </p>
              <div
                className="pt-4 pb-4 mb-4 pb-4"
                style={{ margin: "0 auto", width: "207px" }}
              >
                <Link href="https://calendly.com/marisol-corona/entrevista">
                  <a
                    className="btn btn-primary2 "
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
            </section>
            <hr className="my-5" />
            <section
              className="pb-5 mobile-center"
              data-aos="zoom-in"
              data-aos-duration="750"
            >
              <h2 className="pt-5 text-center pb-5">
                <strong>Esta técnica nos permitirá:</strong>
              </h2>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Ver de dónde parte tu problemática y por qué.
                      </p>
                      <p className="grey-text">
                        Trabajaremos en tus objetivos y metas para lograr lo que
                        realmente quieres.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Tendremos esta visión hacia el futuro que quieres
                        lograr, hacia tu nueva vida, modificando el presente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Vamos a profundizar en algunos temas y para dirigirnos
                        hacia tus objetivos y metas.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Analizaremos el ¿por qué? de las cosas, y trabajaremos
                        en el ¿por qué no? Incluso en el ¿para qué? de lo que
                        realmente quieres.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Te acompañare en el diseño de tu futuro sin que el
                        pasado limite a tu desarrollo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Nos enfocaremos en lo que está mal y en lo que se puede
                        mejorar y desarrollar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-10 mb-2">
                      <p className="grey-text">
                        Nos centraremos en lo que deseas y en lo que quieres.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* </motion.div> */}
    </div>
  );
}
