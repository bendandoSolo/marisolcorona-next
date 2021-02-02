import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Individual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
        },
      }}
      exit={{
        opacity: 0,
        x: "100vw",
        transition: {
          duration: 0.8,
        },
      }}
    >
      <Head>
        <title>Individual | Marisol Corona</title>
      </Head>
      <div className="header therapy">
        <div className="text-center intro">
          <h1 className="mb-3">Terapia Individual</h1>
        </div>
      </div>
      {/* Start of Container */}
      <div className="container">
        {/* Section */}
        <div className="text-center my-5 p-5" data-aos="fade-up">
          <h2 className="mb-5">Sesiones terapia individual y coaching</h2>
          <p>
            La terapia individual que yo uso la enriquezco con técnicas de
            coaching para hacerla mucho más completa y efectiva es un proceso a
            través del cual trabajaremos uno a en un ambiente seguro y
            confidencial para explorar tus sentimientos, creencias y
            comportamientos, trabajar con recuerdos desafiantes o inadecuados,
            identificar aspectos de tu vida que quieres cambiar con el fin de
            entenderse mejor a ti mismo y a los otros, establecer metas
            personales, y trabajar hacia el cambio deseado.
          </p>
          <Link href="https://calendly.com/marisol-corona/informacion?month=2021-02">
            <a target="_blank">
              <button
                id={styles.headerButtonPink}
                className="btn mx-2 mt-4 py-3 px-5 text-white"
                role="button"
              >
                Reservar ahora
                <i className="fas fa-book-open ms-3"></i>
              </button>
            </a>
          </Link>
        </div>
        <hr />
        {/* Section */}
        <div className="my-5 p-5">
          <h2 className="mb-5 text-center" data-aos="fade-up">
            Esta técnica nos permitirá:
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mx-5">
              <ul>
                <li className="d-flex " data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x"
                    aria-hidden="true"
                  ></i>
                  <div className="ms-2">
                    <p>Ver de dónde parte tu problemática y por qué.</p>
                    <p>
                      Trabajaremos en tus objetivos y metas para lograr lo que
                      realmente quieres.
                    </p>
                  </div>
                </li>
                <li className="d-flex " data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x"
                    aria-hidden="true"
                  ></i>
                  <p className="ms-2">
                    Vamos a profundizar en algunos temas y para dirigirnos hacia
                    tus objetivos y metas.
                  </p>
                </li>
                <li className="d-flex " data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Te acompañare en el diseño de tu futuro sin que el pasado
                  limite a tu desarrollo.
                </li>
                <li className="d-flex " data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Nos centraremos en lo que deseas y en lo que quieres.
                </li>
              </ul>
            </div>
            <div className="col-md-4 mx-5">
              <ul>
                <li className="d-flex " data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x"
                    aria-hidden="true"
                  ></i>
                  <p className="ms-2">
                    Tendremos esta visión hacia el futuro que quieres lograr,
                    hacia tu nueva vida, modificando el presente.
                  </p>
                </li>
                <li className="d-flex " data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Analizaremos el ¿por qué? de las cosas, y trabajaremos en el
                  ¿por qué no? Incluso en el ¿para qué? de lo que realmente
                  quieres.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Nos enfocaremos en lo que está mal y en lo que se puede
                  mejorar y desarrollar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
