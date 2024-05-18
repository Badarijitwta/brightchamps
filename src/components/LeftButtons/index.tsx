import "./leftbuttons.css";

import settings from "../../assets/settings.png";
import styled from "styled-components";
import star from "../../assets/Star.png";

const SettingsImage = styled.img`
  width: 60px;
`;
const StarImage = styled.img`
  width: 60px;
`;

export function LeftButtons() {
  return (
    <>
      <div className="leftbuttons-container">
        <div className="left-button-main">
          <div className="left-button-top">
            <div className="lb-ellipse1"></div>
          </div>
          <div className="left-button-mid">
            <SettingsImage src={settings} />
          </div>
          <div className="left-button-bottom">
            <div className="lb-ellipse2"></div>
          </div>
        </div>
        <div className="left-button-main">
          <div className="left-button-top">
            <div className="lb-ellipse1"></div>
          </div>
          <div className="left-button-mid">
            <StarImage src={star} />
          </div>
          <div className="left-button-bottom">
            <div className="lb-ellipse2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
