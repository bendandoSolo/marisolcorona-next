import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import Banner from "./components/Banner";

export default function Programas() {
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
        <title>Programas | Marisol Corona</title>
      </Head>
      <Banner
        text="Programas"
        bgImg="images/programas-dark-header.jpg"
        page="programas"
      />
      <main className="mt-5 pt-5" id="services">
        <div className="container">
          <h2 className="mb-4 pb-3 text-center">
            <strong>Programa Recuperándome a mí misma</strong>
          </h2>
          <h4 className="mb-4 pb-3 text-center primary">Prográma de 3 meses</h4>
          <p className="text-center">
            <strong>
              Es un programa de 3 meses enfocado a recuperarte después de pasar
              por un duelo por pérdida o separación de pareja y llegar a la
              estabilidad emocional, mental y espiritual, creando lo que te
              mereces.
            </strong>
          </p>
          <p className="text-center">
            <strong>
              Aprenderás a conocerte, aceptarte y quererte, sintiéndote más
              completa e independiente, para llegar sentirte mejor con tu vida y
              así poder crear relaciones de pareja más sanas que te harán sentir
              feliz y completa.
            </strong>
          </p>
          <p className="text-center">
            <strong>
              Te acompañaré en cada momento de tu proceso para alcanzar tus
              objetivos.
            </strong>
          </p>
          <div
            className="pt-4 pb-4 mb-4 pb-4"
            style={{ margin: "0 auto", width: "207px" }}
          >
            <Link href="https://calendly.com/marisol-corona/60min">
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

          <hr className="my-5" />
          <section className="pb-5">
            <h2 className="pt-5 text-center pb-5">
              <strong>¿Horas de dedicación?</strong>
            </h2>

            <p className="text-center pb-4">
              <strong>
                1 horas a la semana para trabajar con el material
                psicoeducativo, más una hora de terapia psicológica.
              </strong>
            </p>

            <p className="text-center pb-4">
              <strong>
                Los módulos están especialmente diseñados para ti:{" "}
              </strong>
            </p>

            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className=" col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Aprenderás qué es el duelo y sus etapas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Entenderás lo qué estas sintiendo y por qué.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className=" col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Aplicaras técnicas para manejar tus emociones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className=" col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Entenderás qué es la ruptura y cómo superarla.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Crearás nuevos objetivos para llegar a sentirte mejor.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Aprenderás a amarte, aceptarte y estar contigo misma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fas fa-clipboard-check fa-2x mb-1 dark"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="col-9 mb-2">
                      <p className="grey-text mt-2">
                        Sabrás cómo crear relaciones de pareja más sanas.
                      </p>
                    </div>
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
