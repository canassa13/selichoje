import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.bcb.gov.br/dados/serie",
});
//https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=01/01/2010&dataFinal=09/11/2021
