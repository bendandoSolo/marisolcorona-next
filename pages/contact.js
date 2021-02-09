import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Contact() {
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
        <title>Contact | Marisol Corona</title>
      </Head>
      <div className="header contact">
        <div className="text-center intro">
          <h1 className="mb-3">Contact Marisol Corona</h1>
        </div>
      </div>
      {/* Start of Container */}
      <div className="container">
        {/* Section */}
        <div className="row my-5 justify-content-evenly py-5">
          <div className="col-md-6" data-aos="fade-up">
            <ul className="mb-5">
              <li>
                <h4 className="mb-3">SESIÓN ONLINE</h4>
                <p>¿Cómo funciona?</p>
              </li>
              <li>
                <h4 className="mb-3">RESERVA TU CITA</h4>
                <p>
                  A través de la web, por email: info@marisolcorona.com o al
                  teléfono +7539390244.
                </p>
              </li>
              <li>
                <h4 className="mb-3">PAGA ONLINE</h4>
                <p>
                  A través de nuestra web con nuestra pasarela de pago segura.
                </p>
              </li>
              <li>
                <h4 className="mb-3">CONFIRMACIÓN </h4>
                <p>
                  Recibirás un correo electrónico con los pasos a seguir para la
                  sesión online.
                </p>
              </li>
              <li>
                <h4 className="mb-3">SKYPE O ZOOM</h4>
                <p>Añade esta cuenta a tu Skype: corona.marisol_1</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <form>
              <h2 className="text-center mb-4">Escríbenos</h2>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example1">
                  <i className="fas fa-user me-2"></i>
                  Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">
                  <i className="fas fa-envelope prefix grey-text me-2"></i>
                  Email address
                </label>
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example3">
                  <i className="fas fa-envelope me-2"></i>
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                ></textarea>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form4Example4"
                />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this message
                </label>
              </div>
              <div className="row justify-content-center">
                <button
                  id={styles.headerButtonPink}
                  className="btn mx-2 mt-4 py-3 px-5 text-white"
                  href=""
                  role="button"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
