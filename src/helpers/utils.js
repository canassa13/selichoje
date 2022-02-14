import { valueOrDefault } from "../../dist/helpers.esm";

export function numbers(config) {
  let cfg = config || {};
  let min = valueOrDefault(cfg.min, 0);
  let max = valueOrDefault(cfg.max, 100);
  let from = valueOrDefault(cfg.from, []);
  let count = valueOrDefault(cfg.count, 8);
  let decimals = valueOrDefault(cfg.decimals, 8);
  let continuity = valueOrDefault(cfg.continuity, 1);
  let dfactor = Math.pow(10, decimals) || 0;
  let data = [];
  let i, value;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + this.rand(min, max);
    if (this.rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

export const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};
