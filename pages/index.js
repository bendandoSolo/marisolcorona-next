import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Marisol Corona</title>
      </Head>
      <div className="home-head header">
        <div className="text-center intro">
          <h1 className="mb-3">Marisol Corona psicóloga y coach</h1>
          <div className="row justify-content-center">
            <h5 className="mb-3 text-white col-md-4">
              Soy Marisol Corona, psicóloga clínica experta en duelo por
              pérdida, divorcio y/o separación de pareja, relaciones toxicas,
              codependencia y autoestima.
            </h5>
          </div>
          <button
            id={styles.headerButtonInvisible}
            className="btn mx-2 mt-4 py-3 px-5 text-white"
            href=""
            role="button"
          >
            Aprende más
            <i className="fas fa-play ms-2"></i>
          </button>
          <Link href="https://calendly.com/marisol-corona/entrevista">
            <a target="_blank">
              <button
                id={styles.headerButtonPink}
                className="btn mx-2 mt-4 py-3 px-5 text-white"
                role="button"
              >
                Reservar ahora
                <i className="fas fa-book-open ms-2"></i>
              </button>
            </a>
          </Link>
        </div>
      </div>
      {/* Start of Container */}
      <div className="container">
        <div className="row mt-5 py-5 align-items-start">
          <div className="col-md-4" data-aos="fade-up">
            <h3>Te está pasando que…</h3>
            <ul>
              <li>¿Acabas de terminar una relación?</li>
              <li>
                ¿Piensas que la vida no tiene sentido sin una pareja creando una
                sensación de soledad?
              </li>
              <li>¿No sabes cómo salir de tu perdida de pareja?</li>
              <li>
                ¿Te la pasas checando tu celular para ver si te mando un
                mensaje?
              </li>
              <li>
                ¿Tienes sentimientos como angustia, miedo, frustración,
                tristeza, ansiedad, desmotivación y no sabes cómo controlarlos?
              </li>
              <li>
                ¿Crees que no tienes lo suficiente para salir adelante y que
                siempre estarás en soledad, que todo lo que te está pasando es
                tu culpa?
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center mt-5" data-aos="fade-up">
            <Image
              src="/heart.png"
              alt="Picture of the author"
              width={200}
              height={160}
            />{" "}
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <h3>¿Y sabes por qué te pasa esto?</h3>
            <ul>
              <li>Probablemente nadie te ha enseñado a...</li>
              <li>Sentirte segura, amarte, aceptarte y respetarte.</li>
              <li>
                Entender tus emociones para mejorar tu tranquilidad, llegando a
                la vida que quieres.
              </li>
              <li>
                Sentirte con más autoestima, quererte más a ti misma y aprender
                a estar contigo.
              </li>
              <li>
                Crear relaciones de pareja más sanas que te harán sentir mejor y
                completa.
              </li>
              <li>¡Encontrar a tu pareja ideal!</li>
              <li>¿Te gustaría poder lograr todo esto y más?</li>
            </ul>
          </div>
        </div>
        <hr />
        {/* SECTION */}

        <div className="row pt-5 mt-5 justify-content-evenly">
          <div className="col-md-6 text-center mb-3" data-aos="fade-up">
            <Image
              src="/sol.jpg"
              alt="Picture of the author"
              width={275}
              height={375}
            />
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h3>¿Por qué puedes confiar en mí?</h3>
              <p className="mt-4">Porque pasé por lo mismo que tú...</p>
              <p>
                Entiendo el difícil proceso de duelo y sé lo doloroso que es
                sentir que no puedes salir por ti misma.
              </p>
            </div>
            <div>
              <h3>Como podemos trabajar</h3>
              <p className="mt-4">
                El método de trabajo que utilizo se enmarca dentro del modelo
                Gestáltico el cual yo conbino con coaching.
              </p>
              <p>
                Esta metodología se focaliza en los pensamientos, sentimientos y
                conductas que puedan estar influyendo en el mantenimiento del
                problema actual, facilitando la toma de conciencia y poder
                llegar de donde estas a dónde quieres llegar, por medio de
                terapia uno a uno, workshops y programas.
              </p>
            </div>
          </div>
        </div>
        <hr />

        {/* SECTION */}
        <div className="row mt-5">
          <h2 className="text-center my-5" data-aos="fade-up">
            Sobre Mí
          </h2>
          <div className="col-md-4" data-aos="fade-up">
            <div>
              <ul>
                <li className="d-flex">
                  <i className="fas fa-check-circle fa-2x dark"></i>
                  <div className="mx-3">
                    Soy Marisol Corona Psicóloga Clínica por la UNIVERSIDAD
                    NACIONAL AUTONOMA DE MEXICO, empecé a trabajar como
                    psicóloga en el año 2015.
                  </div>
                </li>
                <li className="d-flex">
                  <i className="fas fa-check-circle fa-2x dark"></i>
                  <div className="mx-3">
                    Colabore en instituciones como el Hospital de la Mujer
                    México capacitando a doctores y enfermeras sobre el manejo
                    de emociones.
                  </div>
                </li>
                <li className="d-flex">
                  <i className="fas fa-check-circle fa-2x dark"></i>
                  <div className="mx-3">
                    Curse una Maestría en Psicología y una Maestría en Terapia
                    Gestalt y Counselling de Madrid.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/qualifications.jpg"
              alt="Picture of the author"
              width={400}
              height={425}
            />
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <ul>
              <li className="d-flex">
                <i className="fas fa-check-circle fa-2x dark"></i>
                <div className="mx-3">
                  Estoy certificada en Humanistic Counselling Skills,
                  certificado avalado por la British Association for Counselling
                  and Psychotherapy (BACP) por el Centro Gestáltico de Londres
                  con Especialización en Duelo de Pareja.
                </div>
              </li>
              <li className="d-flex">
                <i className="fas fa-check-circle fa-2x dark"></i>
                <div className="mx-3">
                  Además, he tomado varios cursos en temas como Duelo,
                  autoestima y relaciones tóxicas.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />

        {/* SECTION */}
        <h2 className="text-center my-5" data-aos="fade-up">
          Servicios
        </h2>
        <div className="row my-5 justify-content-around service">
          <div className="col-md-3 mb-4" data-aos="fade-up">
            <div className="card text-center">
              <img
                src="\images\terapia-individual.jpg"
                className="card-img-top mb-3"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">TERAPIA INDIVIDUAL</h4>
                  <p className="card-text">
                    Se realizan en la comodidad de tu casa, por videoconferencia
                    a través de Skype, Zoom o WhatsApp. Los resultados obtenidos
                    son tan buenos como los que se obtienen en las sesiones
                    presenciales.
                  </p>
                </div>
                <div>
                  <Link href="/individual">
                    <button
                      id={styles.headerButtonPink}
                      className="btn text-white"
                    >
                      Aprende más
                      <i className="fas fa-play ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card text-center">
              <img
                src="\images\workshop.jpg"
                className="card-img-top mb-3"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">WORKSHOPS</h4>
                  <p className="card-text">
                    A través del cual obtendrás las herramientas necesarias para
                    empezar a salir adelante y sentirte mejor.
                  </p>
                </div>
                <div>
                  <Link href="/workshop">
                    <button
                      id={styles.headerButtonPink}
                      className="btn text-white"
                    >
                      Aprende más
                      <i className="fas fa-play ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card text-center">
              <img
                src="\images\programa-landscape.png"
                className="card-img-top mb-3"
                alt="..."
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h4 className="card-title">PROGRAMAS</h4>
                  <p className="card-text">
                    Enfocado a recuperarte después de pasar por un duelo por
                    pérdida o separación de pareja y llegar a la estabilidad
                    emocional, mental y espiritual, creando lo que te mereces.
                  </p>
                </div>
                <div>
                  <Link href="/programas">
                    <button
                      id={styles.headerButtonPink}
                      className="btn text-white"
                    >
                      Aprende más
                      <i className="fas fa-play ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* SECTION */}

        <h2 className="text-center my-5" data-aos="fade-up">
          Descargas
        </h2>
        <div className="text-center" data-aos="fade-up">
          <Image
            src="/man-woman.png"
            alt="Picture of the author"
            width={1000}
            height={425}
          />
        </div>
        <div className="row mt-5">
          <h3 className="text-center" data-aos="fade-up">
            Para comenzar, regístrate y descarga parte de mi contenido gratis
          </h3>

          <div className="col-md-6 text-center p-5" data-aos="fade-up">
            <p>Descarga el podcast GRATIS "Las 5 etapas del Duelo de Pareja"</p>
            <Link href="https://www.dopplerpages.com/marisol-A0943/Form2-35698">
              <a target="_blank">
                <button
                  id={styles.headerButtonPink}
                  className="btn mx-2 mt-2 py-3 px-5 text-white"
                  href=""
                  role="button"
                >
                  Descarga
                  <i className="fas fa-download ms-2"></i>
                </button>
              </a>
            </Link>
          </div>
          <div
            className="col-md-6 text-center p-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              Descarga la guía GRATIS para "Dejar de pensar en tu ex-pareja en 6
              pasos"
            </p>
            <Link href="https://app2.fromdoppler.com/Lists/FormProcessing/PublishedForm?IdForm=YekAANSiE4%2bsddf9OJiocw%3d%3d">
              <a target="_blank">
                <button
                  id={styles.headerButtonPink}
                  className="btn mx-2 mt-2 py-3 px-5 text-white"
                  href=""
                  role="button"
                >
                  Descarga
                  <i className="fas fa-download ms-2"></i>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <hr />

        {/* SECTION */}
        <h2 className="text-center my-4" data-aos="fade-up">
          Preguntas frecuentes
        </h2>
        <div className="row my-5">
          <div className="col-md-6 p-3" data-aos="fade-up">
            <ul>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="mx-3">
                  <h4>¿Por dónde empezar? ¿qué pasos puedo dar?</h4>
                  <p>
                    Solo mándame un mensaje por correo electrónico para ponernos
                    en contacto o pide una sesión directamente o un mensaje al
                    teléfono de whtasAp.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="mx-3">
                  <h4>¿Cuál es la frecuencia y la duración de las sesiones?</h4>
                  <p>
                    En un primer momento se recomienda asistir de manera semanal
                    o quincenal.
                  </p>
                  <p>
                    A medida que la persona sienta que está alcanzando sus
                    objetivos y se encuentre mucho mejor el número de sesiones
                    se irá reduciendo progresivamente.
                  </p>
                  <p>
                    En nuestro centro nos adaptamos a las necesidades de
                    nuestros pacientes. A veces por motivos económicos o por
                    incompatibilidad horaria las sesiones tienen que ser
                    espaciadas en el tiempo. La duración de las sesiones suele
                    ser aproximadamente de una hora de duración.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="mx-3">
                  <h4>
                    ¿Cuál es la frecuencia entre un workshop y el programa?
                  </h4>
                  <p>
                    Un worshop es una clase de 2 dias donde te explicare todo lo
                    referente a la problemática que estás pasando y harás
                    ejercicios para poder entender y tenerlo más claro con el
                    fin de que te sientas mejor; un programa es un
                    acompañamiento de tres meses donde se te proporciona mucha
                    psico información, ejercicios de descubrimiento,
                    meditaciones y lecturas.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="mx-3">
                  <h4>¿Qué duración tiene una terapia psicológica?</h4>
                  <p>
                    Gracias a nuestro modelo de intervención basado en el uso de
                    herramientas y técnicas altamente eficaces podemos decir que
                    las terapias que realizamos en nuestro centro son breves.
                  </p>
                  <p>
                    La duración exacta de la terapia dependerá del motivo de la
                    consulta, la gravedad del problema, la motivación y del
                    compromiso que tenga el paciente durante el proceso.
                  </p>
                  <p>
                    Creemos que la mejor inversión que se puede hacer por uno
                    mismo es emplear el tiempo y el esfuerzo en un proceso
                    terapéutico. Muchos pacientes nos comentan que ha habido un
                    antes y después en sus vidas tras la realización de la
                    terapia.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 p-3" data-aos="fade-up" data-aos-delay="100">
            <ul>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="mx-3">
                  <h4>¿Cuándo tengo de acudir al psicólogo?</h4>
                  <ul>
                    <li>
                      <p>Si te encuentras en un momento difícil de tu vida.</p>
                    </li>
                    <li>
                      Si te enfrentas a un problema que no encuentras la
                      solución y requiere la ayuda de un profesional.
                    </li>
                    <li>
                      Si sientes tristeza, soledad, angustia, ansiedad, etc.
                    </li>
                    <li>Si necesitas un cambio.</li>
                    <li>Si no encuentras satisfacción en tu propia vida.</li>
                    <li>Si necesitas ayuda y apoyo sobre tu problema.</li>
                    <li>
                      Si te gustaría recibir asesoramiento para poder ayudar a
                      otra persona que tiene problemas y no sabes cómo hacerlo.
                    </li>
                    <li>
                      Si tienes alguno de los siguientes problemas: ansiedad,
                      depresión, estrés, problemas de pareja, problemas
                      familiares, divorcio complicado, insatisfacción vital,
                      ausencia de felicidad, etc.
                    </li>
                    <li>
                      Muchas veces pensamos que pedir ayuda es de personas
                      débiles, pensar así hace que el problema se vaya haciendo
                      cada vez más grande y vaya aumentando el sufrimiento
                      significativamente.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="ms-3">
                  <h4>
                    Debido a mi trabajo, no tengo casi disponibilidad ¿cuál es
                    la mejor terapia para mí?
                  </h4>
                  <p>
                    Desde nuestro centro queremos ofreceros la opción que mejor
                    se adapte a ti. Para ello disponemos de tres modalidades:
                  </p>
                  <p>Terapia online por videoconferencia</p>
                </div>
              </li>
              <li className="d-flex">
                <i
                  className="fas fa-comments fa-2x mb-1 dark"
                  aria-hidden="true"
                ></i>
                <div className="ms-3">
                  <h4>¿Mis datos son confidenciales?</h4>
                  <p>Se garantiza confidencialidad absoluta.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* End of Container */}
    </div>
  );
}
