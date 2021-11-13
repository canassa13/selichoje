import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import dayjs from 'dayjs'

import { Tooltip } from '../components/Tooltip'
import { Chart } from '../components/Chart'
import { Table } from '../components/Table'
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
        <div className={`${styles.homeCard} card`}>
          <div>
            <p>Selic</p>
            <Tooltip>Taxa Meta Selic (% a.a.)</Tooltip>
          </div>
          <strong>{metaSelicToday}%</strong>
        </div>
      </section>
      <section className={styles.homeInfo}>
        <div className='card'>
          <h3>Taxa Selic no últimos 30 dias</h3>
          <Chart labels={labels} values={values} />
        </div>
        <div className="card">
          <h3>O que é Selic?</h3>
          <p>
            No Brasil, a taxa Selic é a taxa média ajustada dos financiamentos diários
            apurados no Sistema Especial de Liquidação e de Custódia para títulos
            federais. Ela é obtida mediante o cálculo da taxa média ponderada e ajustada das
            operações de financiamento por um dia, lastreadas em títulos públicos federais e
            cursadas no referido sistema ou em câmaras de compensação e liquidação de ativos, na
            forma de operações compromissadas.
          </p>
        </div>
        <div className="card">
          <h3>Aspectos definidores</h3>
          <p>
            De modo simples, a taxa Selic serve de taxa de juros de pagamento da
            dívida do Governo representada pelos títulos públicos, que são adquiridas
            diariamente especialmente pelas instituições financeiras (<i>overnight</i>),
            ou seja, com a emissão de títulos públicos, o Governo se compromete a
            pagar, a título de juros, aos adquirentes destes, a taxa diária da
            Sistema Especial de Liquidação e Custódia. Sendo assim, a taxa Selic
            tem lastro nos títulos públicos e é modificada diariamente, por meio
            dessas operações de financiamento.
          </p>
        </div>
        <div className="card">
          <h3>Influência na Economia</h3>
          <p>
            Em termos simples, a taxa básica de juros é o instrumento utilizado
            pelo Banco Central para manter a inflação sob controle. Isto porque
            quando a taxa básica de juros Selic é bastante reduzida, os investimentos
            em aquisição de títulos públicos, que lastreiam a Selic, tornam-se menos
            atrativos à população, o que faz com que a população tenha maiores sobras
            de dinheiro, tendo maior acesso ao crédito, aos investimentos em produção
            e ao consumo. Com o maior consumo e aumento da demanda, os preços tendem
            a subir, encadeando o processo inflacionário da moeda.
          </p>
        </div>
        <div className="card">
          <h3>Histórico</h3>
          <p>
            No período de 1º de julho de 1996 a 4 de março de 1999, a taxa básica
            para definição de todas as demais taxas de juros da economia brasileira
            era a TBC (Taxa Básica do Banco Central), determinada mensalmente pelo
            Comitê de Política Monetária (Copom) do Banco Central do Brasil. A
            partir de 2 de janeiro de 1998, essas taxas passaram a ser fixadas
            na expressão anual. Após 5 de março de 1999, com a extinção da TBC,
            o Copom passou a divulgar a meta para a taxa Selic, estabelecida
            periodicamente para fins de política monetária.
          </p>
        </div>
        <div className="card">
          <Table dataset={selicSerie} />
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const finalDate = dayjs(new Date()).set('hours', 0)
  const inicialDate = finalDate.subtract(30, 'day')

  const { data: selicSerie } = await api.get(
    `bcdata.sgs.432/dados?formato=json&dataInicial=${inicialDate.format(
      'DD/MM/YYYY'
    )}&dataFinal=${finalDate.format('DD/MM/YYYY')}`
  )

  const labels = selicSerie.map((selic: { data: string }) =>
    selic.data.substring(0, selic.data.length - 5))
  const values = selicSerie.map((selic: { valor: string }) => selic.valor)

  return {
    props: { selicSerie: selicSerie.slice(-7).reverse(), values, labels },
    revalidate: 24 * 60 * 60, // one day
  }
}

export default Home
