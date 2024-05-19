import { useState } from "react";
import "./card.css";

interface CardProps {
  background: string;
  frontimageUrl: string;
  backimageUrl?: string;
  isStatic?: boolean;
}
const Card: React.FC<CardProps> = ({
  background,
  frontimageUrl,
  backimageUrl,
  isStatic,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    if (!isStatic) {
      setIsFlipped(!isFlipped);
    }
  };
  return (
    <div className="card-main-container" onClick={handleCardClick}>
      <div
        className={`card-main ${
          isFlipped ? "animate__animated animate__flipInY" : ""
        }`}
        style={{ background }}
      >
        <div className="card-icon">
          <div className="card-front">
            <img src={frontimageUrl} alt="" />
          </div>
          {backimageUrl && (
            <div className="card-back">
              <img src={backimageUrl} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
