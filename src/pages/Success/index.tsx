import "./success.css";
import BackButton from "./../../components/BackButton/index";
import Banana from "../../assets/banana.png";
import Button from "../../components/Button";
import MonkeSuccess from "../../assets/monke_success.png";
import styled from "styled-components";
import TopImage from "../../assets/Group 142.png";
const MonkeImage = styled.img`
  width: 180px;
`;
const BananaTopImage = styled.img`
  height: 60px;
  right: 18%;
  transform: rotate(-30deg);
  position: absolute;
  margin-top: -2.4rem;
`;
const Feather = styled.img`
  width: 320px;
  height: 170px;
  position: absolute;
  margin-top: -8rem;
  margin-left: -10rem;
`;

const Success: React.FC = () => {
  const handleSuccessBack = () => {};
  const handleSuccessClick = () => {};
  return (
    <div className="success-container">
      {/* <BananaImage src={Banana} /> */}
      <div className="success-top">
        <div className="back-button-success">
          <BackButton handleBack={handleSuccessBack} />
        </div>
        <div className="success-progress-bar-cont">
          <div className="progress-bar-container">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <BananaTopImage src={Banana} />
          </div>
        </div>
      </div>
      <div className="success-main">
        <div className="monke-top-container">
          <Feather src={TopImage} />
        </div>
        <div className="monke-container">
          <MonkeImage src={MonkeSuccess} />
          <div className="success-button-cont">
            <Button text={"YAY,OK!"} handleClick={handleSuccessClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
