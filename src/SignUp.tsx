import { useState } from "react";
import "./App.scss";
import { emailExists, registration } from "./api/loginAndReg.ts";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isSuccess, setIsSuccess] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isEmailValid) return;

    const isReg = await registration({ email, password });

    setIsSuccess(isReg || false);
  }

  async function checkEmail() {
    if (!email) return;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setIsEmailValid(false);

      return;
    }

    const emailIsExist = await emailExists(email);

    setIsEmailValid(emailIsExist ? false : true);
  }

  return (
    <div className="centered-block">
      {isSuccess && (
        <h2 className="is-size-3">
          Please <b>check your email</b> to activate your account.
        </h2>
      )}

      {!isSuccess && (
        <div className="registration p-5">
          <form className="reg mb-3" onSubmit={submit}>
            <label htmlFor="email">
              Email
              <input
                id="email"
                className="input is-primary"
                type="email"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value.replace(/\s+/g, ""))}
                onFocus={() => setIsEmailValid(true)}
                onBlur={() => checkEmail()}
              />
              {!isEmailValid && (
                <span className="has-text-danger is-size-7">
                  Try to use another email address
                </span>
              )}
            </label>

            <div>
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  className="input is-primary"
                  type={isPasswordVisible ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                />
              </label>
              <div className="registration__pass-block  is-size-7 mt-1">
                <span>At least 8 characters</span>
                <label htmlFor="showPass">
                  Show password
                  <input
                    id="showPass"
                    type="checkbox"
                    checked={isPasswordVisible}
                    onChange={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                </label>
              </div>
            </div>

            <button className="button is-primary" type="submit">
              Sign up
            </button>
          </form>

          <span>Already have an account ? </span>
          <Link to="/log-in">Log in</Link>
        </div>
      )}
    </div>
  );
}
