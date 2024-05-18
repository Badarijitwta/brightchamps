import "./csb.css";

interface CSBProps {
  number: string;

  bgStyle: {
    backgroundColor: string;
    boxShadow: string;
  };
}

const CSButton: React.FC<CSBProps> = ({ number, bgStyle }) => {
  return (
    <div className="csb-cont" style={bgStyle}>
      <div className="csb-top">
        <div className="csb-ellipse1"></div>
      </div>
      <div className="csb-mid">
        <p className="csb-text">{number}</p>
      </div>
      <div className="csb-bottom">
        <div className="csb-ellipse2"></div>
      </div>
    </div>
  );
};

export default CSButton;
