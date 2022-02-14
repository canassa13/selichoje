import type { HomeProps } from "../../pages";

import styles from "./styles.module.scss";

type TableProps = Pick<HomeProps, "formattedSelicSerie">;

export const Table = ({ formattedSelicSerie }: TableProps) => {
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {formattedSelicSerie?.map((d) => (
          <tr key={d?.data}>
            <td>{d?.valor}</td>
            <td>{d?.data}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
