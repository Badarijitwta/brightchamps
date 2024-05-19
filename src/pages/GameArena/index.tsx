import Card from "../../components/Card";
import "./gameArena.css";
import PinkHeart from "../../assets/pink_heart.png";
import BlueHeart from "../../assets/blue_heart.png";
import Dialog from "../../assets/dialog.png";
import styled from "styled-components";
import CurveLine from "../../assets/curvedtop.png";
const DialogImage = styled.img`
  height: 80px;
`;
const CurvedImage = styled.img`
  position: absolute;
  margin-top: 2rem;
  padding-right: 20rem;
  height: 50px;
`;

const Text = styled.h4`
  font-family: Nunito;
  font-size: 20px;
  position: absolute;
  font-weight: 800;
  line-height: 43.65px;
  text-align: center;
  color: #11aec6;
`;

const Game: React.FC = () => {
  const numberOFCards = 3;
  const cardsArray = Array.from({ length: numberOFCards }, (_, index) => index);
  return (
    <>
      <div className="game-arena-container">
        <div className="game-arena-dialog">
          <CurvedImage src={CurveLine} />
          <DialogImage src={Dialog} />
          <Text>Select a Card</Text>
        </div>
        <div className="game-arena-main">
          <div className="fruit-pink-cards">
            <div className="row1">
              {cardsArray.map((num) => (
                <Card
                  key={num}
                  background={
                    "linear-gradient(180deg, #FBA8C1 0%, rgba(251, 168, 193, 0.54) 43%, rgba(251, 168, 193, 0.97) 100%)"
                  }
                  frontimageUrl={PinkHeart}
                />
              ))}
            </div>
            <div className="row2">
              {cardsArray.map((num) => (
                <Card
                  key={num}
                  background={
                    "linear-gradient(180deg, #FBA8C1 0%, rgba(251, 168, 193, 0.54) 46%, rgba(251, 168, 193, 0.97) 100%)"
                  }
                  frontimageUrl={PinkHeart}
                />
              ))}
            </div>
          </div>

          <div className="letter-blue-cards">
            <div className="row1">
              {cardsArray.map((num) => (
                <Card
                  key={num}
                  background={
                    "linear-gradient(180deg, #A2E3F3 0%, rgba(162, 227, 243, 0.29) 46%, #A2E3F3 100%)"
                  }
                  frontimageUrl={BlueHeart}
                />
              ))}
            </div>
            <div className="row2">
              {cardsArray.map((num) => (
                <Card
                  key={num}
                  background={
                    "linear-gradient(180deg, #A2E3F3 0%, rgba(162, 227, 243, 0.29) 46%, #A2E3F3 100%)"
                  }
                  frontimageUrl={BlueHeart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
