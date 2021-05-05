import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import Banner from "./components/Banner";

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
        transition: {
          duration: 0.8,
        },
      }}
    >
      <Head>
        <title>Individual | Marisol Corona</title>
      </Head>
      <Banner
        text="Terapia Individual"
        bgImg="images/terapia-dark-header.jpg"
      />
      {/* Start of Container */}
      <div className="container">
        <main class="mt-5 pt-5" id="services">
          <div class="container">
            <h2 class="mb-4 text-center">
              <strong>Sesiones terapia individual y coaching</strong>
            </h2>
            <p class="mb-4 text-center">
              <strong>
                La terapia individual que yo uso la enriquezco con técnicas de
                coaching para hacerla mucho más completa y efectiva es un
                proceso a través del cual trabajaremos uno a en un ambiente
                seguro y confidencial para explorar tus sentimientos, creencias
                y comportamientos, trabajar con recuerdos desafiantes o
                inadecuados, identificar aspectos de tu vida que quieres cambiar
                con el fin de entenderse mejor a ti mismo y a los otros,
                establecer metas personales, y trabajar hacia el cambio deseado.
              </strong>
            </p>
            <div
              class="pt-4 pb-4 mb-4 pb-4"
              style={{ margin: "0 auto", width: "207px" }}
            >
              <a
                class="btn btn-primary2 "
                href="https://calendly.com/marisol-corona/entrevista"
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
                <i class="fas fa-book-open ms-2"></i>
              </a>
            </div>
            <hr class="my-5" />
            <section className="mb-5">
              <h2 class="pt-5 text-center pb-5">
                <strong>Esta técnica nos permitirá:</strong>
              </h2>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
                        Ver de dónde parte tu problemática y por qué.
                      </p>
                      <p class="grey-text mt-2">
                        Trabajaremos en tus objetivos y metas para lograr lo que
                        realmente quieres.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
                        Tendremos esta visión hacia el futuro que quieres
                        lograr, hacia tu nueva vida, modificando el presente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
                        Vamos a profundizar en algunos temas y para dirigirnos
                        hacia tus objetivos y metas.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
                        Analizaremos el ¿por qué? de las cosas, y trabajaremos
                        en el ¿por qué no? Incluso en el ¿para qué? de lo que
                        realmente quieres.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
                        Te acompañare en el diseño de tu futuro sin que el
                        pasado limite a tu desarrollo.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
                        Nos enfocaremos en lo que está mal y en lo que se puede
                        mejorar y desarrollar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="offset-1 col-1">
                      <i
                        class="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <p class="grey-text mt-2">
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
    </motion.div>
  );
}
