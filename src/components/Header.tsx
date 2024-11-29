import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <div className="nav__side">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/users" className="navbar-item">
          Users
        </Link>
      </div>

      <div className="nav__side">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/sign-up" className="button is-primary">
              Sign up
            </Link>
            <Link to="/log-in" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
