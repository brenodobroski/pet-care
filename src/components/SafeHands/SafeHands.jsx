import "./SafeHands.scss";
import { FaArrowUp } from "react-icons/fa";

const SafeHands = () => {
  return (
    <div className="SafeHands">
      <img src="SafeHands.svg" alt="" />
      <div className="SafeHands__text">
        <h2 className="SafeHands__h2">
          Your furry friend is <br /> In Safe Hands
        </h2>
        <p className="SafeHands__p">
          As a team of experienced Pet owners and lovers, <br /> we really get
          to know you and your pet through <br /> our one -on-one private walks
          and we can <br /> guarantee consistent and personal care that is{" "}
          <br /> equal
        </p>
        <a href="" className="SafeHands__a">
          Read More
          <FaArrowUp className="SafeHands__icon" />
        </a>
      </div>
    </div>
  );
};

export default SafeHands;
