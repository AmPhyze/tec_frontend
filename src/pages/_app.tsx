import type { AppProps } from "next/app";
import "@styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
  </Component>;
}

export default MyApp;
