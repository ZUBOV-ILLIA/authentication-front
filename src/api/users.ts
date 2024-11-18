import { API_URL } from "../variables";
import { httpClient } from "./httpClient";

async function getUsersList() {
  return httpClient.get(`${API_URL}/users`);
}

export const userService = {
  getUsersList,
};
