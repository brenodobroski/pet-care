import "./Hero.scss";
import { FaPhone } from "react-icons/fa6";
import BtnPrimary from "../BtnPrimary/BtnPrimary";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>
          Care of your <br /> Little pets.
        </h1>
        <p className="Hero__text-p">
          We believe finding a reliable, professional pet sitter should be{" "}
          <br /> easy. So we make sure every member of out Family
        </p>

        <div className="Hero__buttons">
          <BtnPrimary />

          <div>
            <a href="" className="schedule">
              <FaPhone className="schedule__phone" />
              <span className="schedule__text">Schedule a call</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Hero__img">
        <img src="blue-cat.svg" alt="" />
        <img src="yellow-cat-1.svg" alt="" className="yellow-cat-1" />
      </div>
    </div>
  );
};

export default Hero;
