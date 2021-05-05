import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "./components/Banner";

export default function Workshop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <Head>
        <title>Workshop | Marisol Corona</title>
      </Head>
      <Banner text="Workshops" bgImg="images/workshop-dark-header.jpg" />
      {/* Start of Container */}
      <main className="mt-5 pt-5" id="services">
        <div className="container">
          <h2 className="mb-4 pb-4 text-center">
            <strong>Workshop Supera tu ruptura amorosa</strong>
          </h2>

          <h5 className="mb-3 text-center primary">
            ¿Acabas de terminar una relación importante?
          </h5>
          <h5 className="mb-3 text-center primary">
            ¿Te sientes triste, ansiosa y angustiada?
          </h5>
          <h5 className="mb-3 text-center primary">
            ¿Te la pasas revisando tu celular para ver si te llamo o dejo algún
            mensaje?
          </h5>
          <h5 className="mb-5 text-center primary">¿Quieres sentirte mejor?</h5>

          <p className="text-center">
            <strong>
              Con el taller de Ruptura amorosa obtendrás las herramientas
              necesarias para empezar a entender lo que estas sintiendo,
              comprender la situación y así poder sentirte mejor y salir
              adelante.
            </strong>
          </p>

          <div
            className="pt-4 pb-4 mb-4 pb-4"
            style={{ margin: "0 auto", width: "207px" }}
          >
            <a
              className="btn btn-primary2 "
              href="https://calendly.com/marisol-corona/informacion"
              target="_blank"
              style={{
                width: "207px",
                height: "50px",
                paddinBottom: "0px",
                paddingTop: "15px",
              }}
              role="button"
            >
              Reservar ahora
              <i className="fas fa-book-open ml-2"></i>
            </a>
          </div>

          <hr className="my-5" />
          <section className="mb-5">
            <h2 className="pt-5 text-center pb-5">
              <strong>Módulos</strong>
            </h2>

            <p className="text-center pb-4">
              <strong>
                Gracias a los ejercicios e información proporcionada
                proporcionados lograras:
              </strong>
            </p>

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-clipboard-check fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="grey-text mt-2">
                      Aprender que es una ruptura amorosa.
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
                  <div className="col-9 mb-2">
                    <p className="grey-text mt-2">
                      Entender y ubicar en qué etapa de duelo pareja te
                      encuentras.
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
                  <div className="col-9 mb-2">
                    <p className="grey-text mt-2">
                      Entender tus emociones como angustia, ansiedad, miedo y de
                      donde vienen.
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
                  <div className="col-9 mb-2">
                    <p className="grey-text mt-2">
                      Porque no era la persona correcta para ti.
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
                  <div className="col-9 mb-2">
                    <p className="grey-text mt-2">
                      Plantearte nuevos objetivos para establecer nuevas
                      relaciones.
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
                  <div className="col-9 mb-2">
                    <p className="grey-text mt-2">
                      Comprender la importancia de pedir ayuda y trabajar en ti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
