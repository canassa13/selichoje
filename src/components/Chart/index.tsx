import { useMemo, useEffect, useState } from "react";

import ChartJs from 'chart.js/auto';

interface ChartProps {
  values: 'string'[],
  labels: 'string'[]
}

export const Chart = ({ labels, values }: ChartProps) => {
  const ctx = 'myChart';
  const [myChart, setMyChart] = useState<ChartJs<"line", "string"[], "string">>()

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
    setMyChart(prevState => {
      if (prevState) {
        prevState?.destroy()
      }
      return new ChartJs(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: false,
          interaction: {
            intersect: false,
            axis: 'x'
          },
          plugins: {
            title: {
              display: true,
              text: 'Meta para a taxa Selic',
            }
          }
        }
      })
    })
  }, [data])

  return <canvas id="myChart" width="500" height="500" />
}