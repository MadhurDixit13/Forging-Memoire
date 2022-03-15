import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div className="header">
          <nav className="navigation">
            <Link to="/home" className="navbar-logo">
              Logo
            </Link>
            <div className="navbar-right">
              <Link to="#">About</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Contact</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;