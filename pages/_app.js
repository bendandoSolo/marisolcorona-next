import { useEffect } from "react";

import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import App from "next/app";
import Head from "next/head";

import { AnimatePresence } from "framer-motion";

class MyApp extends App {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({ once: true });
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
        <Head>
          <link rel="icon" href="/PinkFlavico.ico" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Contact Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
          />
          <meta
            name="keywords"
            content="Contact Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"
          ></script>
        </Head>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </div>
    );
  }
}

export default MyApp;
