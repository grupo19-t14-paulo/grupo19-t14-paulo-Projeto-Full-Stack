import axios from "axios";

export const KenzieKarsApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 5000,
});
