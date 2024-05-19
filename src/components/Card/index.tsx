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
        className={`card-main ${
          flipped
            ? "animate__animated animate__flipInY"
            : "animate__animated animate__flipInX"
        }`}
        style={{
          background: isStatic ? background : !flipped ? background : "",
        }}
      >
        {isStatic && (
          <div className="card-icon">
            <>
              <div className="card-front">
                <img src={frontimageUrl} alt="" />
              </div>
            </>
          </div>
        )}
        <div className="card-icon">
          {!flipped ? (
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
