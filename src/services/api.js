import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-lxk2.onrender.com"
})