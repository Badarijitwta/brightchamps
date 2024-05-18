import Card from "../Card";
import "./cardStack.css";
import CSButton from "./../CSButton/index";
import cardshadow from "../../assets/cardShadow.png";
import styled from "styled-components";

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
  position: fixed;
  width: 230px;
  z-index: -1;
  bottom: 10%;
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
            <div className="card-one">
              <Card />
            </div>
            <div className="card-two">
              <Card />
            </div>
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
