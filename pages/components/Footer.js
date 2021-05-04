import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-4 text-center">
      <div className="text-center">
        <Link href="/">
          <button
            id={styles.headerButtonInvisible}
            className="btn mx-2 mt-2 py-3 px-5 text-white"
            role="button"
          >
            Aprende más
            <i className="fas fa-play ms-2"></i>
          </button>
        </Link>
        <Link href="mailto:marisol@marisolcorona.com?Subject=Consulta%del%sitio%web">
          <button
            id={styles.headerButtonPink}
            className="btn mx-2 mt-2 py-3 px-5 text-white"
            role="button"
          >
            Reservar ahora
            <i className="fas fa-book-open ms-2"></i>
          </button>
        </Link>
        <div className="my-4">
          <Image
            src="/images/logoTrimPink.png"
            alt="Picture of the author"
            width={200}
            height={100}
          />
        </div>
        <div className="py-3">
          <i className="fab fa-facebook-f mx-3"></i>
          <i className="fas fa-users mx-3"></i>
          <i className="fab fa-instagram mx-3"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
