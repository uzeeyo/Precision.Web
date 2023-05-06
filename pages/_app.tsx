import "../styles/tailwind.css";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Precision Reworks - Microsoldering Repair</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Prompt:wght@600&family=Ubuntu:wght@500&display=swap');
        </style>
      </Head>
      <div className="main font-inter text-slate-100 bg-navy-dark relative">
        <div className="flex flex-col">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
