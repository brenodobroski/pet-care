import "./BtnPrimary.scss";
import { FaArrowUp } from "react-icons/fa";

const BtnPrimary = () => {
  return (
    <button className="btn-primary">
      Our Service <FaArrowUp className="btn-icon" />
    </button>
  );
};

export default BtnPrimary;
