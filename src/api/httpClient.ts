import { InternalAxiosRequestConfig } from "axios";
import { createClient } from "./index.ts";

export const httpClient = createClient();

httpClient.interceptors.request.use(onRequest);

function onRequest(req: InternalAxiosRequestConfig) {
  const accessToken = window.localStorage.getItem("accessToken");

  if (accessToken) {
    req.headers = req.headers || {};
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  return req;
}
