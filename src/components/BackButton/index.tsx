import "./backbutton.css";

import backArrow from "../../assets/arrow.png";
import styled from "styled-components";
const BackArrow = styled.img``;

interface BackButtonProps {
  handleBack: () => void;
}
const BackButton: React.FC<BackButtonProps> = ({ handleBack }) => {
  return (
    <div className="back-btn-container">
      <button className="back-btn-main" onClick={handleBack}>
        <div className="back-button-top">
          <div className="back-ellipse1"></div>
        </div>
        <div className="back-button-mid">
          <BackArrow src={backArrow} />
        </div>
        <div className="back-button-bottom">
          <div className="back-ellipse2"></div>
        </div>
      </button>
    </div>
  );
};

export default BackButton;
