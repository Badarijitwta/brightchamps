import "./card.css";

interface CardProps {
  background: string;
  imageUrl: string;
}
const Card: React.FC<CardProps> = ({ background, imageUrl }) => {
  return (
    <div className="card-main-container">
      <div className="card-main" style={{ background }}>
        <div className="card-icon">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
