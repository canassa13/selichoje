import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import dayjs from 'dayjs'

import { Tooltip } from '../components/Tooltip'
import { Chart } from '../components/Chart'
import { api } from '../services/bcdata'

import styles from '../styles/home.module.scss'

interface HomeProps {
  selicSerie: {
    data: 'string'
    valor: 'string'
  }[]
  values: 'string'[]
  labels: 'string'[]
}

const Home: NextPage<HomeProps> = ({ selicSerie, values, labels }) => {
  const lastIndex = selicSerie?.length - 1
  const metaSelicToday = selicSerie[lastIndex]?.valor?.replace('.', ',')

  return (
    <>
      <Head>
        <title>Selic Hoje: Meta para a taxa Selic</title>
      </Head>
      <section className={styles.homeContainer}>
        <div className={styles.homeCard}>
          <div>
            <Link href="/selic">
              <a>Selic</a>
            </Link>

            <Tooltip>Taxa Meta Selic (% a.a.)</Tooltip>
          </div>
          <strong>{metaSelicToday}%</strong>
        </div>
      </section>
      <section className={styles.homeChart}>
        <h3>Taxa Selic no últimos 30 dias</h3>
        <Chart labels={labels} values={values} />
        <h3>Taxa Selic no últimos 30 dias</h3>
        <p>dasdasdasdasda</p>
        <h3>Taxa Selic no últimos 30 dias</h3>
        <p>dasdasdasdasda</p>
        <h3>Taxa Selic no últimos 30 dias</h3>
        <p>dasdasdasdasda</p>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const finalDate = dayjs(new Date())
  const inicialDate = finalDate.subtract(30, 'day')

  const { data: selicSerie } = await api.get(
    `bcdata.sgs.432/dados?formato=json&dataInicial=${inicialDate.format(
      'DD/MM/YYYY'
    )}&dataFinal=${finalDate.format('DD/MM/YYYY')}`
  )

  const labels = selicSerie.map((selic: { data: string }) => selic.data)
  const values = selicSerie.map((selic: { valor: string }) => selic.valor)

  return {
    props: { selicSerie, values, labels },
    revalidate: 24 * 60 * 60, // one day
  }
}

export default Home
