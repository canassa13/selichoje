import { useMemo, useEffect, useRef } from "react";

import ChartJs from 'chart.js/auto';

import styles from './styles.module.scss'

interface ChartProps {
  values: 'string'[],
  labels: 'string'[]
}

export const Chart = ({ labels, values }: ChartProps) => {
  const ctx = 'myChart';
  const myChartRef = useRef<ChartJs<"line", "string"[], "string">>()

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: '% a.a., dados diários',
        data: values,
        borderColor: 'black',
        fill: false,
        stepped: true,
      }
    ]
  }), [labels, values])

  useEffect(() => {
    if (myChartRef.current) {
      myChartRef.current?.destroy()
    }
    myChartRef.current = new ChartJs(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: false,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          axis: 'x'
        },
        plugins: {
          title: {
            display: true,
          }
        }
      }
    })
  }, [data])

  return <canvas id="myChart" height='300' width='300' />
}