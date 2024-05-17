import "./button.css";

interface ButtonProps {
  text: string;
}
const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="button-container">
      <button className="button-main">
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
