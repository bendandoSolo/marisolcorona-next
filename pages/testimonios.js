import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "./components/Banner";

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
        transition: {
          duration: 0.8,
        },
      }}
    >
      <Head>
        <title>Testimonios | Marisol Corona</title>
      </Head>
      <Banner text="Testimonios" bgImg="images/testimonios-dark-header.jpg" />

      <main id="main" className="mt-5 pt-5">
        <div class="container">
          <section class="text-center">
            <h2 class="h1-responsive font-weight-bold">
              Lo que dicen mis clientas
            </h2>

            <div class="row mt-5 pt-5">
              <div class="col-lg-6  col-md-12 mb-lg-0 mb-4 testimonial-card-container">
                <div class="card testimonial-card">
                  <div class="card-up info-color"></div>

                  <div class="avatar mx-auto white">
                    <img
                      src="images/testimonios/Jenny-Briseno.jpeg"
                      class="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Jenny Briseno"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="font-weight-bold mb-4 primary">
                      Jenny Briseño, España
                    </h4>
                    <hr />
                    <p class="dark-grey-text mt-4 testimonial-text">
                      <i class="fas fa-quote-left pr-2"></i>Me gustó mucho
                      trabajar con Marisol, me sentí comprendida, me ayudo a
                      salir de ese término en mi relación al que no veía forma
                      de recuperarme y ahora me siento mucho mejor, el programa
                      es muy completo y me hizo darme cuenta de muchas cosas en
                      las que pude trabajar.
                      <i class="fas fa-quote-right pr-2"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-md-0 mb-4 testimonial-card-container">
                <div class="card testimonial-card">
                  <div class="card-up blue-gradient"></div>

                  <div class="avatar mx-auto white">
                    <img
                      src="images/testimonios/Charity-Massey.jpg"
                      class="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Charity Massey"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="font-weight-bold mb-4 primary">
                      Charity Massey, Inglaterra
                    </h4>
                    <hr />
                    <p class="dark-grey-text mt-4 testimonial-text">
                      <i class="fas fa-quote-left pr-2"></i>Marisol me ayudo a
                      salir del sufrimiento en el que me encontraba y sentía que
                      nunca iba a salir, ahora sé que todo depende de mí y yo
                      decido sentirme mejor y ser feliz.
                      <i class="fas fa-quote-right pr-2"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row py-5">
              <div class="col-lg-6 col-md-12 mb-lg-0 mb-4 testimonial-card-container">
                <div class="card testimonial-card">
                  <div class="card-up info-color"></div>
                  <div class="avatar mx-auto white">
                    <img
                      src="images/testimonios/Elizabet-Llandes.jpg"
                      class="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Elizabet Llandes"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="font-weight-bold mb-4 primary">
                      Elizabet Llandes, México
                    </h4>
                    <hr />
                    <p class="dark-grey-text mt-4 testimonial-text">
                      <i class="fas fa-quote-left pr-2"></i>Gracias por apoyarme
                      en el proceso de encontrarme, entenderme y saber lo que
                      realmente quiero en una pareja ahora entiendo que no se
                      puede pedir, lo que no estás dispuesta a dar.
                      <i class="fas fa-quote-right pr-2"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-md-0 mb-4 testimonial-card-container">
                <div class="card testimonial-card">
                  <div class="card-up blue-gradient"></div>
                  <div class="avatar mx-auto white">
                    <img
                      src="images/testimonios/Ana-Carolina-Morales.jpg"
                      class="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Carolina Morales"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="font-weight-bold mb-4 primary">
                      Ana Carolina Morales, Mexico
                    </h4>
                    <hr />
                    <p class="dark-grey-text mt-4 testimonial-text">
                      <i class="fas fa-quote-left pr-2 "></i>Encontrar a una
                      psicóloga que se enfocara en ruptura amorosa fue lo mejor
                      para mí, buscaba tener ayuda para superar la relación con
                      mi ex pareja, ahora ya me siento mejor, soy una mujer más
                      fuerte que logra todo lo que se propone.
                      <i class="fas fa-quote-right pr-2"></i>
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
