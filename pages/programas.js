import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Programas() {
  return (
    <div>
      <Head>
        <title>Programas | Marisol Corona</title>
      </Head>
      <div className="header programas">
        <div className="text-center intro">
          <h1 className="mb-3">Programas</h1>
        </div>
      </div>
      {/* Start of Container */}
      <div className="container">
        {/* Section */}
        <div className="text-center my-5 p-5">
          <h2 className="mb-5" data-aos="fade-up">
            Programa Recuperándome a mí misma
          </h2>
          <h5 className="mb-5" data-aos="fade-up">
            Prográma de 3 meses
          </h5>
          <p data-aos="fade-up">
            Es un programa de 3 meses enfocado a recuperarte después de pasar
            por un duelo por pérdida o separación de pareja y llegar a la
            estabilidad emocional, mental y espiritual, creando lo que te
            mereces.
          </p>
          <p data-aos="fade-up">
            Aprenderás a conocerte, aceptarte y quererte, sintiéndote más
            completa e independiente, para llegar sentirte mejor con tu vida y
            así poder crear relaciones de pareja más sanas que te harán sentir
            feliz y completa.
          </p>
          <p data-aos="fade-up">
            Te acompañaré en cada momento de tu proceso para alcanzar tus
            objetivos.
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
            ¿Horas de dedicación?
          </h2>
          <div className="row justify-content-center">
            <p className="text-center mb-4" data-aos="fade-up">
              1 horas a la semana para trabajar con el material psicoeducativo,
              más una hora de terapia psicológica.
            </p>
            <p className="text-center mb-5" data-aos="fade-up">
              Los módulos están especialmente diseñados para ti:
            </p>
            <div className="col-md-4 mx-5">
              <ul>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Aprenderás qué es el duelo y sus etapas.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Aplicaras técnicas para manejar tus emociones.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Crearás nuevos objetivos para llegar a sentirte mejor.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Sabrás cómo crear relaciones de pareja más sanas.
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
                  Entenderás lo qué estas sintiendo y por qué.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Entenderás qué es la ruptura y cómo superarla.
                </li>
                <li className="d-flex" data-aos="fade-up">
                  <i
                    className="fas fa-clipboard-check fa-2x me-2"
                    aria-hidden="true"
                  ></i>
                  Aprenderás a amarte, aceptarte y estar contigo misma.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
