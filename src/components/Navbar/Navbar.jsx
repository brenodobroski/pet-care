/* eslint-disable react/prop-types */
import "./Navbar.scss";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = ({ home, services, training, madicare }) => {
  const item = document.querySelectorAll(".Navbar__links-item");

  item.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      event.preventDefault();

      item.forEach((itemNav) => {
        itemNav.classList.remove("active");
      });

      nav.classList.add("active");
    });
  });

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <a href="">
          <h3 className="Navbar__logo-text">Pet.Care</h3>
        </a>
      </div>
      <div className="Navbar__links">
        <ul className="Navbar__links-list">
          <li
            className="Navbar__links-item"
            id="Navbar__item"
            onClick={() => window.scrollTo({ top: 100, behavior: "smooth" })}
          >
            <a className="Navbar__links-link" href={home}>
              Home
            </a>
          </li>
          <li
            className="Navbar__links-item"
            id="Navbar__item"
            onClick={() => window.scrollTo({ top: 2200, behavior: "smooth" })}
          >
            <a className="Navbar__links-link" href={services}>
              Services
            </a>
          </li>
          <li
            className="Navbar__links-item"
            id="Navbar__item"
            onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
          >
            <a className="Navbar__links-link" href={training}>
              Stats
            </a>
          </li>
          <li
            className="Navbar__links-item"
            id="Navbar__item"
            onClick={() => window.scrollTo({ top: 4400, behavior: "smooth" })}
          >
            <a className="Navbar__links-link" href={madicare}>
              Reviews
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
