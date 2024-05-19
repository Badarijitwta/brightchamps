import Card from "../../components/Card";
import "./gameArena.css";
import PinkHeart from "../../assets/pink_heart.png";
import BlueHeart from "../../assets/blue_heart.png";
const Game: React.FC = () => {
  const numberOFCards = 3;
  const cardsArray = Array.from({ length: numberOFCards }, (_, index) => index);
  return (
    <>
      <div className="game-arena-container">
        <div className="game-arena-main">
          <div className="fruit-letter-cards">
            <div className="row1">
              {cardsArray.map((num) => (
                <Card
                  key={num}
                  background={
                    "linear-gradient(180deg, #FBA8C1 0%, rgba(251, 168, 193, 0.54) 46%, rgba(251, 168, 193, 0.97) 100%)"
                  }
                  imageUrl={PinkHeart}
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
                  imageUrl={PinkHeart}
                />
              ))}
            </div>
          </div>

          <div className="fruit-letter-cards">
            <div className="row1">
              {cardsArray.map((num) => (
                <Card
                  key={num}
                  background={
                    "linear-gradient(180deg, #A2E3F3 0%, rgba(162, 227, 243, 0.29) 46%, #A2E3F3 100%)"
                  }
                  imageUrl={BlueHeart}
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
                  imageUrl={BlueHeart}
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
