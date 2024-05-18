import "./progressbar.css";
import banana from "../../assets/banana.png";
import styled from "styled-components";

const BananaImage = styled.img`
  height: 50px;
  margin-top: -1rem;
  margin-left: -2rem;
  transform: rotate(-30deg);
  filter: grayscale(100%);
`;
const ProgressBar: React.FC = () => {
  return (
    <>
      <div className="progress-bar-container">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-gray"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <BananaImage src={banana} />
      </div>
    </>
  );
};

export default ProgressBar;
