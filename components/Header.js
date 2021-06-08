import React from 'react';

import Head from "next/head";



const Header = () => {
    return (
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
            content="Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
          />
          <meta
            name="keywords"
            content="Marisol Corona es psicóloga experta en duelo de pareja, ruptura amorosa, autoestima, dependencia emocional y relaciones toxicas al haber sufrido personalmente una ruptura amorosa"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.2.0/mdb.min.js"
          ></script>
        </Head>  
    );
};

export default Header;