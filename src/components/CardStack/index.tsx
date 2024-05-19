import Card from "../Card";
import "./cardStack.css";
import CSButton from "./../CSButton/index";
import cardshadow from "../../assets/cardShadow.png";
import styled from "styled-components";
import Apple from "../../assets/apple.png";
import PinkHeart from "../../assets/pink_heart.png";
import BlueHeart from "../../assets/blue_heart.png";
import StyledCards from "../../assets/Group 157.png";

interface CardStackProp {
  number: string;
  bgStyle: {
    backgroundColor: string;
    boxShadow: string;
  };
  cardText: string;
  cardBottomText: string;
}

const CardShadow = styled.img`
  transform: rotate(0deg);
  width: 230px;
  margin-top: 10px;
  z-index: -1;
`;

const CardStack: React.FC<CardStackProp> = ({
  number,
  bgStyle,
  cardText,
  cardBottomText,
}) => {
  return (
    <div className="card-stack-container">
      <div className="card-stack-main">
        <div className="card-img-cont">
          <div className="card-holder">
            {number === "01" && (
              <>
                <div className="card-one">
                  <Card
                    background={
                      "linear-gradient(180deg, #FBA8C1 0%, rgba(251, 168, 193, 0.54) 46%, rgba(251, 168, 193, 0.97) 100%)"
                    }
                    frontimageUrl={PinkHeart}
                    isStatic={true}
                  />
                  ;
                </div>
                <div className="card-two">
                  <Card
                    background={"rgba(255, 137, 111, 1)"}
                    frontimageUrl={Apple}
                    isStatic={true}
                  />
                </div>
              </>
            )}

            {number === "02" && (
              <>
                <div className="card-holder">
                  <Card
                    background={
                      "linear-gradient(180deg, #A2E3F3 0%, rgba(162, 227, 243, 0.29) 46%, #A2E3F3 100%)"
                    }
                    frontimageUrl={BlueHeart}
                    isStatic={true}
                  />
                </div>
              </>
            )}

            {number === "03" && (
              <>
                <div
                  className="card-holder"
                  style={{
                    width: "100%",
                    marginBottom: "-6rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={StyledCards}
                    width={"240px"}
                    height={"240px"}
                    alt=""
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="card-bottom-main">
          <div className="cs-button-container">
            <CSButton number={number} bgStyle={bgStyle} />
          </div>
          <div className="card-bottom-text">
            <div className="card-text-cont">{cardText}</div>
            <div className="card-text-bottom">{cardBottomText}</div>
          </div>
        </div>
      </div>
      <CardShadow src={cardshadow} />
    </div>
  );
};

export default CardStack;
