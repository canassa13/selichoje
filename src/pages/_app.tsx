import type { AppProps } from "next/app";

import { Header, Footer } from '../components/';

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp;
