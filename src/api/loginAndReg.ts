import axios from "axios";
import { API_URL } from "../variables";

type LogAndRegData = {
  email: string;
  password: string;
};

export function registration(data: LogAndRegData) {
  axios
    .post(`${API_URL}/registration`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      console.log(res);
    });
}

export async function activationUser(token: string) {
  try {
    const res = await axios.get(`${API_URL}/activation/${token}`);

    return res.status === 200;
  } catch (err) {
    console.error(err);
  }
}
