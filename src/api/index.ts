import axios from "axios";
import { API_URL } from "../variables";

export function createClient() {
  return axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });
}
