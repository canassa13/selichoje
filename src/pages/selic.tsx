import type { NextPage } from "next";
import styles from '../styles/selic.module.scss';

const Selic: NextPage = () => {
  return (
    <section className={styles.selicContainer}>
      <h3>Taxa Selic</h3>
      <p>
        A Selic é a taxa básica de juros da economia. É o principal instrumento de política monetária utilizado pelo Banco Central (BC) para controlar a inflação. Ela influencia todas as taxas de juros do país, como as taxas de juros dos empréstimos, dos financiamentos e das aplicações financeiras.
      </p>
      <p>
        A taxa Selic refere-se à taxa de juros apurada nas operações de empréstimos de um dia entre as instituições financeiras que utilizam títulos públicos federais como garantia. O BC opera no mercado de títulos públicos para que a taxa Selic efetiva esteja em linha com a meta da Selic definida na reunião do Comitê de Política Monetária do BC (Copom).
      </p>

      <h3>
        Origem do nome Selic
      </h3>
      <p>
        O nome da taxa Selic vem da sigla do Sistema Especial de Liquidação e de Custódia. Tal sistema é uma infraestrutura do mercado financeiro administrada pelo BC. Nele são transacionados títulos públicos federais. A taxa média ajustada dos financiamentos diários apurados nesse sistema corresponde à taxa Selic.
      </p>
    </section>
  );
};


export default Selic;
