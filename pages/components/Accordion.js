import React from "react";

const Accordian = () => {
  return (
    <div className=" mt-4 row justify-content-center">
      <div
        className="accordion accordion-flush col-md-5 mx-2"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h5>Te está pasando que…</h5>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-mdb-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>¿Acabas de terminar una relación?</p>
              <p>
                ¿Piensas que la vida no tiene sentido sin una pareja creando una
                sensación de soledad?
              </p>
              <p>¿No sabes cómo salir de tu perdida de pareja?</p>
              <p>
                ¿Te la pasas checando tu celular para ver si te mando un
                mensaje?
              </p>
              <p>
                ¿Tienes sentimientos como angustia, miedo, frustración,
                tristeza, ansiedad, desmotivación y no sabes cómo controlarlos?
              </p>
              <p>
                ¿Crees que no tienes lo suficiente para salir adelante y que
                siempre estarás en soledad, que todo lo que te está pasando es
                tu culpa?
              </p>
              <p>
                ¿Quieres sentirte mejor y salir adelante pero no sabes cómo?
              </p>
              <p>
                ¿Crees que siempre vas a encontrar a nadie que quiera estar
                contigo?
              </p>
              <p>
                ¿Sientes que hay algo malo en ti y que por eso nadie te quiere?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="accordion accordion-flush col-md-5 mx-2"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h5>¿Y sabes por qué te pasa esto?</h5>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-mdb-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                <strong>Probablemente nadie te ha enseñado a...</strong>
              </p>
              <p>Sentirte segura, amarte, aceptarte y respetarte.</p>
              <p>
                Entender tus emociones para mejorar tu tranquilidad, llegando a
                la vida que quieres.
              </p>
              <p>
                Sentirte con más autoestima, quererte más a ti misma y aprender
                a estar contigo.
              </p>
              <p>
                Crear relaciones de pareja más sanas que te harán sentir mejor y
                completa.
              </p>
              <p>¡Encontrar a tu pareja ideal!</p>
              <p>
                <strong>¿Te gustaría poder lograr todo esto y más?</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
