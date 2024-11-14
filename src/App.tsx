import { useState } from "react";
import "./App.scss";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <div className="centered-block">
      <div className="registration p-5">
        <form className="reg mb-3">
          <label htmlFor="email">
            Email
            <input
              id="email"
              className="input is-primary"
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <a href="#">Log in</a>
      </div>
    </div>
  );
}
