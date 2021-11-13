import styles from './styles.module.scss'

interface TableProps {
  dataset: {
    data: 'string',
    valor: 'string'
  }[]
}

export const Table = ({ dataset }: TableProps) => {
  return (
    <table className={styles.containerTable}>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {dataset?.map(d => (
          <tr key={d?.data}>
            <td>{d?.valor}</td>
            <td>{d?.data}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}