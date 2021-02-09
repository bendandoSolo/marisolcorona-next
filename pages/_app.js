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
    AOS.init({});
  }

  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <div>
        <Head>
          <link rel="icon" href="/PinkFlavico.ico" />
          {/* <!-- Font Awesome --> */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            rel="stylesheet"
          />
          {/* <!-- Google Fonts --> */}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap"
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

          {/* <!-- MDB --> */}
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

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     AOS.init({});
//   }, []);

//   return (
//     <div>
//       <Head>
//         <link rel="icon" href="/PinkFlavico.ico" />
//         {/* <!-- Font Awesome --> */}
//         <link
//           href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
//           rel="stylesheet"
//         />

//         {/* <!-- Google Fonts --> */}
//         <link
//           href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//           rel="stylesheet"
//         />
//         {/* <!-- MDB -->
//         <link
//           href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.css"
//           rel="stylesheet"
//         /> */}

//         {/* BOOTSTRAP */}
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
//           crossorigin="anonymous"
//         ></link>

//         {/* Meta tags added from original */}
//         <meta
//           name="description"
//           content="Contact Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
//         />
//         <meta
//           name="keywords"
//           content="Contact Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
//         />

//         <meta charset="UTF-8" />

//         {/* <!-- MDB -->
//         <script
//           type="text/javascript"
//           src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"
//         ></script> */}

//         <script
//           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
//           integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
//           crossorigin="anonymous"
//         ></script>
//       </Head>
//       <Navbar />
//       <Component {...pageProps} />
//       <Footer />
//     </div>
//   );
// }

// export default MyApp;
