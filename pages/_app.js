import { useEffect } from "react";
import { useRouter } from 'next/router'

import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import * as gtag from '../lib/gtag';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  const nextRouter = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    //unimplement analytics boilerplate code
    nextRouter.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [nextRouter.events])


  useEffect(() => {
    AOS.init({ once: true });
  });

return(
  <>
      <Header/>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
           <Component {...pageProps} key={router.route} />
         </AnimatePresence>
      <Footer />
  </>
)};

export default MyApp;
