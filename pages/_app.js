import { useEffect } from "react";

import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/PinkFlavico.ico" />
        {/* <!-- Font Awesome --> */}
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />

        {/* <!-- Google Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- MDB --> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css"
          rel="stylesheet"
        />

        {/* Meta tags added from original */}
        <meta
          name="description"
          content="Contact Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
        />
        <meta
          name="keywords"
          content="Contact Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
        />

        <meta charset="UTF-8" />

        {/* <!-- MDB --> */}
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"
        ></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
