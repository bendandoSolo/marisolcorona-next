// Next Imports
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import Banner from "./components/Banner";

export default function Home() {
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
        <title>Home | Marisol Corona</title>
      </Head>
      <Banner
        text="Marisol Corona psicóloga y coach"
        smallText="Soy Marisol Corona, psicóloga clínica experta en duelo por pérdida, divorcio y/o separación de pareja, relaciones toxicas, codependencia y autoestima."
        button
        bgImg="images/Sol-bg.jpg"
      />
      <main className="mt-5 pt-5" id="main">
        <div className="container">
          <section id="aprende-mas">
            <div className="row features-small wow fadeIn">
              <div className="col-md-4">
                <div className="row ">
                  <h4 className="primary pb-3 full-width">
                    Te está pasando que…
                  </h4>
                  <p>¿Acabas de terminar una relación?</p>
                  <p>
                    ¿Piensas que la vida no tiene sentido sin una pareja creando
                    una sensación de soledad?
                  </p>
                  <p>¿No sabes cómo salir de tu perdida de pareja?</p>
                  <p>
                    ¿Te la pasas checando tu celular para ver si te mando un
                    mensaje?
                  </p>
                  <p>
                    ¿Tienes sentimientos como angustia, miedo, frustración,
                    tristeza, ansiedad, desmotivación y no sabes cómo
                    controlarlos?
                  </p>
                  <p>
                    ¿Crees que no tienes lo suficiente para salir adelante y que
                    siempre estarás en soledad, que todo lo que te está pasando
                    es tu culpa?
                  </p>
                  <p>
                    ¿Quieres sentirte mejor y salir adelante pero no sabes cómo?
                  </p>
                  <p>
                    ¿Crees que siempre vas a encontrar a nadie que quiera estar
                    contigo?
                  </p>
                  <p>
                    ¿Sientes que hay algo malo en ti y que por eso nadie te
                    quiere?
                  </p>
                </div>
              </div>

              <div className="col-md-4 d-flex align-items-center">
                <img
                  src="/heart.png"
                  alt="broken heart"
                  className="repair w-100 my-3"
                />
              </div>

              <div className="col-md-4 ">
                <div className="row">
                  <h4 className="primary pb-3">
                    ¿Y sabes por qué te pasa esto?
                  </h4>
                  <p>
                    <strong>Probablemente nadie te ha enseñado a...</strong>
                  </p>
                  <p>Sentirte segura, amarte, aceptarte y respetarte.</p>
                  <p>
                    Entender tus emociones para mejorar tu tranquilidad,
                    llegando a la vida que quieres.
                  </p>
                  <p>
                    Sentirte con más autoestima, quererte más a ti misma y
                    aprender a estar contigo.
                  </p>
                  <p>
                    Crear relaciones de pareja más sanas que te harán sentir
                    mejor y completa.
                  </p>
                  <p className="full-width"> ¡Encontrar a tu pareja ideal!</p>
                  <p>
                    <strong>¿Te gustaría poder lograr todo esto y más?</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section className="mt-5 pt-5 wow fadeIn">
            <div className="row my-5">
              <div className="col-md-6 my-5">
                <img
                  src="/Sol.jpg"
                  className="img-fluid z-depth-1-half"
                  style={{ width: "320px", margin: "0 auto", display: "block" }}
                  alt="Marisol Corona Psicóloga Clínica"
                />
              </div>
              <div className="col-md-6 mb-4 side-padding">
                <h3 className="h3 mb-3 text-center">
                  ¿Por qué puedes confiar en mí?
                </h3>
                <p className="text-center">
                  Porque pasé por lo mismo que tú...
                </p>
                <p className="text-center">
                  Entiendo el difícil proceso de duelo y sé lo doloroso que es
                  sentir que no puedes salir por ti misma.
                </p>

                <hr />
                <h3 className="h3 mb-3 text-center">Como podemos trabajar</h3>
                <p className="text-center">
                  El método de trabajo que utilizo se enmarca dentro del modelo
                  Gestáltico el cual yo conbino con coaching.
                </p>
                <p className="text-center">
                  Esta metodología se focaliza en los pensamientos, sentimientos
                  y conductas que puedan estar influyendo en el mantenimiento
                  del problema actual, facilitando la toma de conciencia y poder
                  llegar de donde estas a dónde quieres llegar, por medio de
                  terapia uno a uno, workshops y programas.
                </p>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section>
            <h2 className="my-5 h3 text-center">Sobre Mí</h2>

            <div className="row features-small mb-5 mt-3 wow fadeIn">
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
              <div className="col-md-4 flex-center">
                <img
                  src="/qualifications.jpg"
                  alt="Marisol Corona "
                  className="z-depth-0 img-fluid"
                />
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
          <section className="text-center">
            <h2 className="my-5">Servicios</h2>
            <div className="row mb-4 wow fadeIn">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card mx-4">
                  <div className="view overlay">
                    <img
                      src="/images/terapia-card.jpg"
                      className="card-img-top"
                      alt="terapia individual"
                      style={{ height: "250px" }}
                    />
                    <a href="/Individual" target="_blank">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className="card-body">
                    <h4 className="card-title">TERAPIA INDIVIDUAL</h4>
                    <p className="card-text services-card-text">
                      Se realizan en la comodidad de tu casa, por
                      videoconferencia a través de Skype, Zoom o WhatsApp. Los
                      resultados obtenidos son tan buenos como los que se
                      obtienen en las sesiones presenciales.
                    </p>
                    <a
                      href="/Individual"
                      target="_blank"
                      className="btn btn-primary2 btn-md"
                    >
                      Aprende más
                      <i className="fas fa-play ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card mx-4">
                  <div className="view overlay">
                    <img
                      src="/images/workshop-card.jpg"
                      className="card-img-top"
                      alt="Workshop"
                      style={{ height: "250px" }}
                    />
                    <a href="/Workshops" target="_blank">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className="card-body">
                    <h4 className="card-title">WORKSHOPS</h4>
                    <p className="card-text services-card-text">
                      A través del cual obtendrás las herramientas necesarias
                      para empezar a salir adelante y sentirte mejor.
                    </p>
                    <a
                      href="/Workshops"
                      target="_blank"
                      className="btn btn-primary2 btn-md"
                    >
                      Aprende más
                      <i className="fas fa-play ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card mx-4">
                  <div className="view overlay">
                    <img
                      src="/images/programas-card.png"
                      className="card-img-top"
                      alt="Programas"
                      style={{ height: "250px" }}
                    />
                    <a href="/Programas" target="_blank">
                      <div className="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className="card-body">
                    <h4 className="card-title">PROGRAMAS</h4>
                    <p className="card-text services-card-text">
                      Enfocado a recuperarte después de pasar por un duelo por
                      pérdida o separación de pareja y llegar a la estabilidad
                      emocional, mental y espiritual, creando lo que te mereces.
                    </p>
                    <a
                      href="/Programas"
                      target="_blank"
                      className="btn btn-primary2 btn-md"
                    >
                      Aprende más
                      <i className="fas fa-play ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section>
            <h2 className="my-5 h3 text-center">Descargas</h2>
            <div className="full-width center-children pb-5">
              <img
                src="/man-woman.png"
                style={{ width: "100%", height: "auto" }}
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
                  <a className="btn btn-primary2" target="_blank" role="button">
                    Descarga
                    <i className="fas fa-download ms-2"></i>
                  </a>
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
                  <a
                    className="btn btn-primary2"
                    href="https://tinyurl.com/w5xg9d3"
                    target="_blank"
                    role="button"
                  >
                    Descarga
                    <i className="fas fa-download ms-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section className="mb-5">
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
    </motion.div>
  );
}
