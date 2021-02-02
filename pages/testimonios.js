import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonials() {
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
        <title>Create Next App</title>
      </Head>
      <div className="header testimonios">
        <div className="text-center intro">
          <h1 className="mb-3">Testimonios</h1>
        </div>
      </div>
      {/* Start of Container */}
      <div className="container testimonials">
        {/* Section */}
        <h2 className="my-5 text-center" data-aos="fade-up">
          Lo que dicen mis clientas
        </h2>
        <div className="row my-5 justify-content-evenly">
          <div className="col-md-4">
            <div
              className="card text-center py-5 px-3 align-items-center"
              data-aos="fade-up"
            >
              <img
                src="\images\Jenny-Briseno.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body mt-4">
                <h4>Jenny Briseño, España</h4>
                <hr />
                <p className="card-text">
                  "Me gustó mucho trabajar con Marisol, me sentí comprendida, me
                  ayudo a salir de ese término en mi relación al que no veía
                  forma de recuperarme y ahora me siento mucho mejor, el
                  programa es muy completo y me hizo darme cuenta de muchas
                  cosas en las que pude trabajar. "
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card text-center py-5 px-3  align-items-center"
              data-aos="fade-up"
            >
              <img
                src="\images\Charity-Massey.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body mt-4">
                <h4>Charity Massey, Inglaterra</h4>
                <hr />
                <p className="card-text">
                  "Marisol me ayudo a salir del sufrimiento en el que me
                  encontraba y sentía que nunca iba a salir, ahora sé que todo
                  depende de mí y yo decido sentirme mejor y ser feliz. "
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 justify-content-evenly">
          <div className="col-md-4">
            <div
              className="card text-center py-5 px-3 align-items-center"
              data-aos="fade-up"
            >
              <img
                src="\images\Elizabet-Llandes.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body mt-4">
                <h4>Elizabet Llandes, México</h4>
                <hr />
                <p className="card-text">
                  "Gracias por apoyarme en el proceso de encontrarme, entenderme
                  y saber lo que realmente quiero en una pareja ahora entiendo
                  que no se puede pedir, lo que no estás dispuesta a dar"
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card text-center py-5 px-3 align-items-center"
              data-aos="fade-up"
            >
              <img
                src="\images\Ana-Carolina-Morales.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body mt-4">
                <h4>Ana Carolina Morales, Mexico</h4>
                <hr />
                <p className="card-text">
                  "Encontrar a una psicóloga que se enfocara en ruptura amorosa
                  fue lo mejor para mí, buscaba tener ayuda para superar la
                  relación con mi ex pareja, ahora ya me siento mejor, soy una
                  mujer más fuerte que logra todo lo que se propone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
