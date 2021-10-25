import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { api } from "../services/bcdata";

import styles from "../styles/home.module.scss";

interface HomeProps {
  selicSerie: {
    data: 'string'
    valor: 'string'
  }[]
}

const Home: NextPage<HomeProps> = ({ selicSerie }) => {
  const metaSelicToday = selicSerie[selicSerie?.length - 1]?.valor.replace('.', ',')

  return (
    <>
      <Head>
        <title>Selic hoje</title>
      </Head>
      <section className={styles.homeContainer}>
        <h1>
          Selic: {metaSelicToday}%
        </h1>
      </section>
    </>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const { data: selicSerie } = await api.get(`bcdata.sgs.432/dados?formato=json`)

  return {
    props: { selicSerie },
    revalidate: 24 * 60 * 60 // one day
  }
}

export default Home;
