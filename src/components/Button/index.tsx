import "./button.css";
// import { useNavigate } from "react-router-dom";s

interface ButtonProps {
  handleClick: () => void;
  text?: string;
}
const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <div className="button-container">
      <button className="button-main" onClick={handleClick}>
        <div className="button-inside">
          <div className="button-inside-top">
            <div className="ellipse"></div>
          </div>
          <div className="button-text">{text}</div>
        </div>
      </button>
      <div className="polygon"></div>
    </div>
  );
};

export default Button;
