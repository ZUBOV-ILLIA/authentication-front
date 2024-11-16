import axios from "axios";
import { API_URL } from "../variables";

type LogAndRegData = {
  email: string;
  password: string;
};

export function registration(data: LogAndRegData) {
  try {
    axios
      .post(`${API_URL}/registration`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 201) {
          return true;
        }
      });
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function activationUser(token: string) {
  try {
    const res = await axios.get(`${API_URL}/activation/${token}`);

    return res.status === 200;
  } catch (err) {
    console.error(err);
  }
}

export async function emailExists(email: string) {
  try {
    const res = await axios.post(`${API_URL}/is-email-valid`, { email });

    return res.status === 200;
  } catch (err) {
    console.error(err);
  }
}
