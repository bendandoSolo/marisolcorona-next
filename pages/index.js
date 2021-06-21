// Next Imports
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <div>
      {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
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
        <title>Home | Marisol Corona</title>
        <meta
          name="description"
          content="Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
        />
        <meta
          name="keywords"
          content="Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
        />
      </Head>
      <Banner
        text="Marisol Corona psicóloga y coach"
        smallText="Soy Marisol Corona, psicóloga clínica experta en duelo por pérdida, divorcio y/o separación de pareja, relaciones toxicas, codependencia y autoestima."
        button
        bgImg="images/banners/home_bg.png"
        page="home"
      />
      <main className="mt-5 pt-5" id="main">
        <div className="container">
          <section
            id="aprende-mas"
            data-aos="zoom-in"
            data-aos-duration="750"
            style={{ margin: "0 auto" }}
            className="row justify-content-center"
          ></section>
          <section
            className="mt-5 pt-5"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <div className="row jusitfy-content-center align-items-center">
              <div className="col-lg-5">
                <img
                  src="/images/home-sections/Sol.jpg"
                  className="img-fluid mb-5 div-shadow"
                  style={{ width: "320px", margin: "0 auto", display: "block" }}
                  alt="Marisol Corona Psicóloga Clínica"
                />
              </div>
              <div className="col-lg-6 mb-4 text-center">
                <h3 className="h3 mb-3">¿Por qué puedes confiar en mí?</h3>
                <p>Porque pasé por lo mismo que tú...</p>
                <p>
                  Entiendo el difícil proceso de duelo y sé lo doloroso que es
                  sentir que no puedes salir por ti misma.
                </p>

                <hr className="my-4" />
                <h3 className="h3 mb-3">Como podemos trabajar</h3>
                <p>
                  El método de trabajo que utilizo se enmarca dentro del modelo
                  Gestáltico el cual yo conbino con coaching.
                </p>
                <p>
                  Esta metodología se focaliza en los pensamientos, sentimientos
                  y conductas que puedan estar influyendo en el mantenimiento
                  del problema actual, facilitando la toma de conciencia y poder
                  llegar de donde estas a dónde quieres llegar, por medio de
                  terapia uno a uno, workshops y programas.
                </p>
              </div>
            </div>
            <Accordion />
          </section>
          <hr className="my-5" />
          <section data-aos="zoom-in" data-aos-duration="750">
            <h2 className="my-5 h3 text-center">Sobre Mí</h2>
            <div className="row mb-5 mt-3 d-flex justify-content-evenly">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x dark"></i>
                  </div>
                  <div className="col-10">
                    <p className="grey-text">
                      Soy Marisol Corona Psicóloga Clínica por la UNIVERSIDAD
                      NACIONAL AUTONOMA DE MEXICO, empecé a trabajar como
                      psicóloga en el año 2015.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x dark"></i>
                  </div>
                  <div className="col-10">
                    <p className="grey-text">
                      Colabore en instituciones como el Hospital de la Mujer
                      México capacitando a doctores y enfermeras sobre el manejo
                      de emociones.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                  <div className="row"> </div>

                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x dark"></i>
                  </div>
                  <div className="col-10">
                    <p className="grey-text">
                      Curse una Maestría en Psicología y una Maestría en Terapia
                      Gestalt y Counselling de Madrid.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x dark"></i>
                  </div>
                  <div className="col-10">
                    <p className="grey-text">
                      Estoy certificada en Humanistic Counselling Skills,
                      certificado avalado por la British Association for
                      Counselling and Psychotherapy (BACP) por el Centro
                      Gestáltico de Londres con Especialización en Duelo de
                      Pareja.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x dark"></i>
                  </div>
                  <div className="col-10">
                    <p className="grey-text">
                      Además, he tomado varios cursos en temas como Duelo,
                      autoestima y relaciones tóxicas.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section
            className="text-center"
            data-aos="zoom-in"
            data-aos-duration="750"
          >
            <h2 className="my-5 h3">Servicios</h2>
            <div className="row mb-4">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card mx-4 service-card h-100">
                  <Link href="/individual">
                    <img
                      src="/images/cards/terapia-card.jpg"
                      className="card-img-top"
                      alt="Terapia Individual"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title">
                      <strong>TERAPIA INDIVIDUAL</strong>
                    </h4>
                    <p className="card-text services-card-text mb-5">
                      <strong>
                        Se realizan en la comodidad de tu casa, por
                        videoconferencia a través de Skype, Zoom o WhatsApp. Los
                        resultados obtenidos son tan buenos como los que se
                        obtienen en las sesiones presenciales.
                      </strong>
                    </p>
                    <Link href="/individual">
                      <a className="btn btn-primary2 btn-md">
                        Aprende más
                        <i className="fas fa-play ms-2"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card mx-4 service-card h-100">
                  <Link href="/workshops">
                    <img
                      src="/images/cards/workshops_bg.png"
                      className="card-img-top"
                      alt="Workshop"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title">
                      <strong>WORKSHOPS</strong>
                    </h4>
                    <p className="card-text services-card-text">
                      <strong>
                        A través del cual obtendrás las herramientas necesarias
                        para empezar a salir adelante y sentirte mejor.
                      </strong>
                    </p>
                    <Link href="/workshops">
                      <a className="btn btn-primary2 btn-md">
                        Aprende más
                        <i className="fas fa-play ms-2"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card mx-4 service-card h-100">
                  <Link href="/programas">
                    <img
                      src="/images/cards/programas-card.png"
                      className="card-img-top"
                      alt="Programas"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>

                  <div className="card-body">
                    <h4 className="card-title">
                      <strong>PROGRAMAS</strong>
                    </h4>
                    <p className="card-text services-card-text">
                      <strong>
                        Enfocado a recuperarte después de pasar por un duelo por
                        pérdida o separación de pareja y llegar a la estabilidad
                        emocional, mental y espiritual, creando lo que te
                        mereces.
                      </strong>
                    </p>
                    <Link href="/programas">
                      <a className="btn btn-primary2 btn-md">
                        Aprende más
                        <i className="fas fa-play ms-2"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section data-aos="zoom-in" data-aos-duration="750">
            <h2 className="my-5 h3 text-center">Descargas</h2>
            <div className="pb-5">
              <img
                className="div-shadow"
                src="/images/home-sections/man_vs_woman.png"
                style={{ width: "100%", height: "auto" }}
                alt="Hombre vs mujer"
              />
            </div>

            <h4 className="pb-4 text-center primary">
              Para comenzar, regístrate y descarga parte de mi contenido gratis
            </h4>
            <div className="row full-width">
              <div className="col-md-6 mb-4 pb-4 text-center">
                <p style={{ minHeight: "48px" }}>
                  <strong>
                    Descarga el podcast GRATIS "Las 5 etapas del Duelo de
                    Pareja"
                  </strong>
                </p>
                <Link href="https://www.dopplerpages.com/marisol-A0943/Form2-35698">
                  <button
                    className="btn btn-primary2"
                    target="_blank"
                    role="button"
                    style={{
                      width: "175px",
                      height: "50px",
                      paddingBottom: "0px",
                      paddingTop: "0",
                    }}
                  >
                    Descarga
                    <i className="fas fa-download ms-2"></i>
                  </button>
                </Link>
              </div>

              <div className="col-md-6 mb-4 pb-4 text-center">
                <p style={{ minHeight: "48px" }}>
                  <strong>
                    Descarga la guía GRATIS para "Dejar de pensar en tu
                    ex-pareja en 6 pasos"
                  </strong>
                </p>
                <Link href="https://tinyurl.com/w5xg9d3">
                  <button
                    className="btn btn-primary2"
                    href="https://tinyurl.com/w5xg9d3"
                    target="_blank"
                    role="button"
                    style={{
                      width: "175px",
                      height: "50px",
                      paddingBottom: "0px",
                      paddingTop: "0",
                    }}
                  >
                    Descarga
                    <i className="fas fa-download ms-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section className="mb-5" data-aos="zoom-in" data-aos-duration="750">
            <h2 className="my-5 h3 text-center">Preguntas frecuentes</h2>
            <div className="row features-small mt-5 wow fadeIn">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2 pl-3">
                    <h5 className="feature-title font-bold mb-1">
                      ¿Por dónde empezar? ¿qué pasos puedo dar?
                    </h5>
                    <p className="grey-text mt-2">
                      Solo mándame un mensaje por correo electrónico para
                      ponernos en contacto o pide una sesión directamente o un
                      mensaje al teléfono de whtasAp.
                    </p>
                  </div>

                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1  dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      ¿Cuál es la frecuencia y la duración de las sesiones?
                    </h5>
                    <p className="grey-text mt-2">
                      En un primer momento se recomienda asistir de manera
                      semanal o quincenal.
                    </p>
                    <p className="grey-text mt-2">
                      A medida que la persona sienta que está alcanzando sus
                      objetivos y se encuentre mucho mejor el número de sesiones
                      se irá reduciendo progresivamente.
                    </p>
                    <p className="grey-text mt-2">
                      En nuestro centro nos adaptamos a las necesidades de
                      nuestros pacientes. A veces por motivos económicos o por
                      incompatibilidad horaria las sesiones tienen que ser
                      espaciadas en el tiempo. La duración de las sesiones suele
                      ser aproximadamente de una hora de duración.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      ¿Cuándo tengo de acudir al psicólogo?
                    </h5>
                    <ul
                      className="grey-text mt-2"
                      style={{ listStyle: "none", paddingLeft: "0" }}
                    >
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si te
                        encuentras en un momento difícil de tu vida.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si te
                        enfrentas a un problema que no encuentras la solución y
                        requiere la ayuda de un profesional.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si sientes
                        tristeza, soledad, angustia, ansiedad, etc.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si
                        necesitas un cambio.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si no
                        encuentras satisfacción en tu propia vida.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si
                        necesitas ayuda y apoyo sobre tu problema.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si te
                        gustaría recibir asesoramiento para poder ayudar a otra
                        persona que tiene problemas y no sabes cómo hacerlo.
                      </li>
                      <li>
                        <i className="fas fa-check fa-x dark p-1"></i>Si tienes
                        alguno de los siguientes problemas: ansiedad, depresión,
                        estrés, problemas de pareja, problemas familiares,
                        divorcio complicado, insatisfacción vital, ausencia de
                        felicidad, etc.
                      </li>
                    </ul>
                    <p className="grey-text mt-2">
                      Muchas veces pensamos que pedir ayuda es de personas
                      débiles, pensar así hace que el problema se vaya haciendo
                      cada vez más grande y vaya aumentando el sufrimiento
                      significativamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      ¿Cuál es la frecuencia entre un workshop y el programa?
                    </h5>
                    <p className="grey-text mt-2">
                      Un worshop es una clase de 2 dias donde te explicare todo
                      lo referente a la problemática que estás pasando y harás
                      ejercicios para poder entender y tenerlo más claro con el
                      fin de que te sientas mejor; un programa es un
                      acompañamiento de tres meses donde se te proporciona mucha
                      psico información, ejercicios de descubrimiento,
                      meditaciones y lecturas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      Debido a mi trabajo, no tengo casi disponibilidad ¿cuál es
                      la mejor terapia para mí?
                    </h5>
                    <p className="grey-text mt-2">
                      Desde nuestro centro queremos ofreceros la opción que
                      mejor se adapte a ti. Para ello disponemos de tres
                      modalidades:
                    </p>
                    <p className="grey-text mt-2">
                      Terapia online por videoconferencia
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      ¿Qué duración tiene una terapia psicológica?
                    </h5>
                    <p className="grey-text mt-2">
                      Gracias a nuestro modelo de intervención basado en el uso
                      de herramientas y técnicas altamente eficaces podemos
                      decir que las terapias que realizamos en nuestro centro
                      son breves.
                    </p>
                    <p className="grey-text mt-2">
                      La duración exacta de la terapia dependerá del motivo de
                      la consulta, la gravedad del problema, la motivación y del
                      compromiso que tenga el paciente durante el proceso.
                    </p>
                    <p className="grey-text mt-2">
                      Creemos que la mejor inversión que se puede hacer por uno
                      mismo es emplear el tiempo y el esfuerzo en un proceso
                      terapéutico. Muchos pacientes nos comentan que ha habido
                      un antes y después en sus vidas tras la realización de la
                      terapia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <i
                      className="fas fa-comments fa-2x mb-1 dark"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-10 mb-2">
                    <h5 className="feature-title font-bold mb-1">
                      ¿Mis datos son confidenciales?
                    </h5>
                    <p className="grey-text mt-2">
                      Se garantiza confidencialidad absoluta.
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
