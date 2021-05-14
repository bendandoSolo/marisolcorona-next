// Next Links
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import Banner from "./components/Banner";

// Form Modules
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Se requiere el nombre"),
    email: Yup.string()
      .email("Email inválido")
      .required("Correo electronico es requerido"),
    message: Yup.string().required("Se requiere mensaje"),
  });

  const sendEmail = async (props) => {
    const contactFormBtn = document.getElementById("contact-form-btn");
    contactFormBtn.classList.add("disable-click");
    sending();
    props["to"] = "marisol@marisolcorona.com";
    props["website"] = "marisolcorona.com";
    const response = await fetch(
      "https://sendgridcsharp.azurewebsites.net/api/sendemail",
      {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(props),
      }
    );
    try {
      let bodyresponse = await response.json();
      if (
        response.status === 200 &&
        bodyresponse.message != null &&
        bodyresponse.message == "Email Sent"
      ) {
        responseSuccess();
      } else {
        responseError();
      }
    } catch (err) {
      responseError();
    }
  };

  function sending() {
    const feedback = document.getElementById("feedback");
    let feedbackText = document.getElementById("feedback-text");
    feedback.classList.add("pop-down");
    feedbackText.classList.add("fade-in");
    setTimeout(function () {
      feedback.classList.remove("pop-down");
      feedbackText.classList.add("fade-out");
      feedback.classList.add("pop-up");
    }, 1500);
    setTimeout(function () {
      feedback.classList.remove("pop-up");
      feedbackText.classList.remove("fade-out", "fade-in");
    }, 2500);
  }

  function responseSuccess() {
    setTimeout(function () {
      const contactFormBtn = document.getElementById("contact-form-btn");
      const response = document.getElementById("response");
      let responseText = document.getElementById("response-text");
      response.classList.add("pop-down", "message-sent");
      responseText.classList.add("fade-in");
      responseText.innerHTML = "Mensaje enviado";
      contactFormBtn.classList.remove("disable-click");
    }, 2500);
  }

  function responseError() {
    setTimeout(function () {
      const contactFormBtn = document.getElementById("contact-form-btn");
      const response = document.getElementById("response");
      let responseText = document.getElementById("response-text");
      response.classList.add("pop-down", "message-error");
      responseText.classList.add("fade-in");
      responseText.innerHTML = "Error: inténtelo de nuevo";
      contactFormBtn.classList.remove("disable-click");
    }, 2500);
  }

  return (
    <motion.div
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
    >
      <Head>
        <title>Contacto | Marisol Corona</title>
        <meta
          name="description"
          content="Contacto Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
        />
        <meta
          name="keywords"
          content="Contacto Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
        />
      </Head>
      <Banner
        text="Contacto Marisol Corona"
        bgImg="images/banners/contact_bg.png"
        page="contact"
      />
      <div className="container">
        <div
          className="row my-5 justify-content-evenly align-items-center py-5"
          data-aos="zoom-in"
          data-aos-duration="750"
        >
          <div className="col-lg-6 col-md-12 px-4">
            <div className="row mb-2">
              <div className="col-1 mr-3">
                <i className="fas fa-info fa-2x primary"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title primary">SESIÓN ONLINE</h5>
                <p className="grey-text">¿Cómo funciona?</p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1 mr-3">
                <i className="fas fa-info fa-2x primary"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title primary">RESERVA TU CITA</h5>
                <p className="grey-text">
                  A través de la web, por email:
                  <Link href="mailto:marisol@marisolcorona.com?Subject=Consulta%del%sitio%web">
                    <a target="_top">info@marisolcorona.com </a>
                  </Link>{" "}
                  o al teléfono{" "}
                  <Link href="tel:+:+7539390244">
                    <a target="_top">+7539390244. </a>
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1 mr-3">
                <i className="fas fa-info fa-2x primary"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title primary">PAGA ONLINE</h5>
                <p className="grey-text">
                  A través de nuestra web con nuestra pasarela de pago segura.
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1 mr-3">
                <i className="fas fa-info fa-2x primary"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title primary">CONFIRMACIÓN</h5>
                <p className="grey-text">
                  Recibirás un correo electrónico con los pasos a seguir para la
                  sesión online.
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-1 mr-3">
                <i className="fas fa-info fa-2x primary"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title primary">SKYPE O ZOOM</h5>
                <p className="grey-text">
                  Añade esta cuenta a tu Skype: corona.marisol_1
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8" data-aos="fade-up">
            <div className="contact_form shadow-5">
              {
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    sendEmail(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact_form">
                      <h2 className="text-center mb-4">Escríbenos</h2>
                      <hr />
                      <div className="row">
                        <div>
                          <i className="fas fa-user me-2"></i>
                        </div>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Tu nombre"
                          className="form-label px-3"
                          htmlFor="form4Example1"
                        />
                        {errors.name && touched.name ? (
                          <div className="error-validation">*{errors.name}</div>
                        ) : null}
                        <div>
                          <i className="fas fa-envelope prefix me-2"></i>
                        </div>
                        <Field
                          name="email"
                          type="email"
                          id="email"
                          placeholder="Tu correo electrónico"
                          className="form-label px-3"
                        />
                        {errors.email && touched.email ? (
                          <div className="error-validation">
                            *{errors.email}
                          </div>
                        ) : null}
                        <div>
                          <i className="fas fa-pencil-alt me-2"></i>
                        </div>
                        <div className="col-sm-12">
                          <Field
                            type="textarea"
                            as="textarea"
                            name="message"
                            type="message"
                            id="message"
                            placeholder="Tu mensaje"
                            className="w-100 form-label px-3"
                            rows="5"
                          />
                          {errors.message && touched.message ? (
                            <div className="error-validation">
                              *{errors.message}
                            </div>
                          ) : null}
                          <div id="feedback">
                            <p id="feedback-text">Enviando...</p>
                          </div>
                          <div id="response">
                            <p id="response-text"></p>
                          </div>
                          <div className="text-center">
                            <button
                              className="btn text-white btn-primary2 mt-3"
                              type="submit"
                              id="contact-form-btn"
                            >
                            Enviar
                            </button>
                          </div>
                          <div id="msg"></div>
                          <hr />
                          <p className="text-center">
                            Todos los campos son obligatorios
                          </p>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
