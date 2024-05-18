import Card from "../Card";
import "./cardStack.css";
import CSButton from "./../CSButton/index";
interface CardStackProp {
  number: string;
  bgStyle: {
    backgroundColor: string;
    boxShadow: string;
  };
}
const CardStack: React.FC<CardStackProp> = ({ number, bgStyle }) => {
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
            <div className="card-text-cont">
              cxxcccccccccccczczx czcz czxczcard.
            </div>
            <div className="card-text-bottom">It has images.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
