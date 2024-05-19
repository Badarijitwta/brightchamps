import { useState } from "react";
import "./card.css";

interface CardProps {
  background: string;
  frontimageUrl: string;
  backimageUrl?: string;
  isStatic?: boolean;
  status?: string;
}
const Card: React.FC<CardProps> = ({
  background,
  frontimageUrl,
  backimageUrl,
  isStatic,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (!isStatic) {
      setFlipped((prev) => !prev);
    }
  };
  return (
    <div className="card-main-container" onClick={handleCardClick}>
      <div
        className="card-main"
        style={{ background: flipped ? background : "" }}
      >
        <div className="card-icon">
          {flipped ? (
            <>
              <div className="card-front">
                <img src={frontimageUrl} alt="" />
              </div>
            </>
          ) : (
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
