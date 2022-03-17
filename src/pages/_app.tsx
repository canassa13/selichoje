import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { Header, Footer, Seo, Analytics } from "../components/";
import * as gtag from "../services/gaTrackingId";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Seo />
      <Analytics />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
