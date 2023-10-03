import "./Navbar.scss";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <a href="">
          <h3 className="Navbar__logo-text">Pet.Care</h3>
        </a>
      </div>
      <div className="Navbar__links">
        <ul className="Navbar__links-list">
          <li className="Navbar__links-item">
            <a className="Navbar__links-link" href="">
              Home
            </a>
          </li>
          <li className="Navbar__links-item">
            <a className="Navbar__links-link" href="">
              Services
            </a>
          </li>
          <li className="Navbar__links-item">
            <a className="Navbar__links-link" href="">
              Training
            </a>
          </li>
          <li className="Navbar__links-item">
            <a className="Navbar__links-link" href="">
              Madi-care
            </a>
          </li>
        </ul>
      </div>
      <div className="Navbar__signup">
        <a className="Navbar__signup" href="">
          <h3>Sign up</h3>
          <FaSignInAlt className="Navbar__signup-icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
