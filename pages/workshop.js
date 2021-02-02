import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Workshop() {
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
        <title>Workshop | Marisol Corona</title>
      </Head>
      <div className="header workshop">
        <div className="text-center intro">
          <h1 className="mb-3">Workshops</h1>
        </div>
      </div>
      {/* Start of Container */}
      <div className="container">
        {/* Section */}
        <div className="text-center my-5 p-5">
          <h2 className="mb-5" data-aos="fade-up">
            Workshop Supera tu ruptura amorosa
          </h2>
          <div className={styles.workshop}>
            <h5 data-aos="fade-up">
              ¿Acabas de terminar una relación importante?
            </h5>
            <h5 data-aos="fade-up">
              ¿Te sientes triste, ansiosa y angustiada?
            </h5>
            <h5 data-aos="fade-up">
              ¿Te la pasas revisando tu celular para ver si te llamo o dejo
              algún mensaje?
            </h5>
            <h5 className="mb-5" data-aos="fade-up">
              ¿Quieres sentirte mejor?
            </h5>
          </div>
          <p data-aos="fade-up">
            Con el taller de Ruptura amorosa obtendrás las herramientas
            necesarias para empezar a entender lo que estas sintiendo,
            comprender la situación y así poder sentirte mejor y salir adelante.
          </p>
          <Link href="https://calendly.com/marisol-corona/informacion?month=2021-02">
            <a target="_blank">
              <button
                id={styles.headerButtonPink}
                className="btn mx-2 mt-4 py-3 px-5 text-white"
                data-aos="fade-up"
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
          <h2 className="mb-5 text-center " data-aos="fade-up">
            Módulos
          </h2>
          <div className="row justify-content-center">
            <h5 className="text-center mb-5" data-aos="fade-up">
              Gracias a los ejercicios e información proporcionada
              proporcionados lograras:
            </h5>
            <div className="col-md-4 mx-5">
              <ul>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Aprender que es una ruptura amorosa.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Entender tus emociones como angustia, ansiedad, miedo y de
                  donde vienen.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Plantearte nuevos objetivos para establecer nuevas relaciones.
                </li>
              </ul>
            </div>
            <div className="col-md-4 mx-5">
              <ul>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Entender y ubicar en qué etapa de duelo pareja te encuentras.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Porque no era la persona correcta para ti.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Comprender la importancia de pedir ayuda y trabajar en ti.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
