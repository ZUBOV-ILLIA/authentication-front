import { useEffect, useState } from "react";
import "./App.scss";
import { logIn } from "./api/loginAndReg.ts";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLogined, setIsLogined] = useState<null | boolean>(null);

  const navigate = useNavigate();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isLogIned = await logIn({ email, password });

    if (isLogIned) {
      setIsLogined(true);
      window.localStorage.setItem("accessToken", isLogIned.accessToken);
    } else {
      setIsLogined(false);
    }
  }

  useEffect(() => {
    if (isLogined === true) {
      navigate("/users");
    }
  }, [isLogined, navigate]);

  return (
    <div className="centered-block">
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
            />
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
              <span></span>
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

          {isLogined === false && (
            <span className="has-text-danger is-size-7">
              Email or password is incorrect
            </span>
          )}

          <button className="button is-primary" type="submit">
            Log in
          </button>
        </form>

        <span>Don't have an account yet ? </span>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}
