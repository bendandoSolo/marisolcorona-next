// Next Links
import Head from "next/head";

// import { motion } from "framer-motion";
import Banner from "../components/Banner";

export default function Testimonials() {
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
        <title>Testimonios | Marisol Corona</title>
        <meta
          name="description"
          content="Marisol ha ayudado a muchas personas a salir adelante después de una ruptura amorosa, sentirse mejor construyendo relaciones de pareja más sanas para encontrar su pareja ideal."
        />
        <meta
          name="keywords"
          content="Marisol ha ayudado a muchas personas a salir adelante después de una ruptura amorosa, sentirse mejor construyendo relaciones de pareja más sanas para encontrar su pareja ideal."
        />
      </Head>
      <Banner
        text="Testimonios"
        bgImg="images/banners/testimonios_bg.png"
        page="testimonios"
      />

      <main id="main" className="mt-5 pt-5">
        <div className="container">
          <section
            className="text-center"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <h2
              className="h1-responsive"
              data-aos="zoom-in"
              data-aos-duration="750"
            >
              <strong>Lo que dicen mis clientas</strong>
            </h2>

            <div className="row mt-5 pt-5">
              <div className="col-lg-6  col-md-12 mb-lg-0 mb-4 testimonial-card-container">
                <div className="card testimonial-card">
                  <div className="card-up info-color"></div>

                  <div className="avatar mx-auto white">
                    <img
                      src="images/testimonios/Jenny-Briseno.jpeg"
                      className="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Jenny Briseno"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="mb-4 primary">Jenny Briseño, España</h4>
                    <hr />
                    <p className="dark-grey-text mt-4 testimonial-text">
                      <i className="fas fa-quote-left px-2"></i>
                      <strong>
                        Me gustó mucho trabajar con Marisol, me sentí
                        comprendida, me ayudo a salir de ese término en mi
                        relación al que no veía forma de recuperarme y ahora me
                        siento mucho mejor, el programa es muy completo y me
                        hizo darme cuenta de muchas cosas en las que pude
                        trabajar.
                      </strong>
                      <i className="fas fa-quote-right px-2"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-md-0 mb-4 testimonial-card-container">
                <div className="card testimonial-card">
                  <div className="card-up blue-gradient"></div>

                  <div className="avatar mx-auto white">
                    <img
                      src="images/testimonios/Charity-Massey.jpg"
                      className="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Charity Massey"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="mb-4 primary">Charity Massey, Inglaterra</h4>
                    <hr />
                    <p className="dark-grey-text mt-4 testimonial-text">
                      <i className="fas fa-quote-left px-2"></i>
                      <strong>
                        Marisol me ayudo a salir del sufrimiento en el que me
                        encontraba y sentía que nunca iba a salir, ahora sé que
                        todo depende de mí y yo decido sentirme mejor y ser
                        feliz.
                      </strong>
                      <i className="fas fa-quote-right px-2"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-5">
              <div className="col-lg-6 col-md-12 mb-lg-0 mb-4 testimonial-card-container">
                <div className="card testimonial-card">
                  <div className="card-up info-color"></div>
                  <div className="avatar mx-auto white">
                    <img
                      src="images/testimonios/Elizabet-Llandes.jpg"
                      className="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Elizabet Llandes"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="mb-4 primary">Elizabet Llandes, México</h4>
                    <hr />
                    <p className="dark-grey-text mt-4 testimonial-text">
                      <i className="fas fa-quote-left px-2"></i>
                      <strong>
                        Gracias por apoyarme en el proceso de encontrarme,
                        entenderme y saber lo que realmente quiero en una pareja
                        ahora entiendo que no se puede pedir, lo que no estás
                        dispuesta a dar.
                      </strong>
                      <i className="fas fa-quote-right px-2"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-md-0 mb-4 testimonial-card-container">
                <div className="card testimonial-card">
                  <div className="card-up blue-gradient"></div>
                  <div className="avatar mx-auto white">
                    <img
                      src="images/testimonios/Ana-Carolina-Morales.jpg"
                      className="rounded-circle img-fluid testimonial-circle"
                      alt="Clienta Carolina Morales"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="mb-4 primary">
                      Ana Carolina Morales, Mexico
                    </h4>
                    <hr />
                    <p className="dark-grey-text mt-4 testimonial-text">
                      <i className="fas fa-quote-left px-2 "></i>
                      <strong>
                        Encontrar a una psicóloga que se enfocara en ruptura
                        amorosa fue lo mejor para mí, buscaba tener ayuda para
                        superar la relación con mi ex pareja, ahora ya me siento
                        mejor, soy una mujer más fuerte que logra todo lo que se
                        propone.
                      </strong>
                      <i className="fas fa-quote-right px-2"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* </motion.div> */}
    </div>
  );
}
