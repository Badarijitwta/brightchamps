import styled from "styled-components";
import "./homepage.css";
import background from "../assets/background1.png";
import { LeftButtons } from "../components/LeftButtons";
import Button from "./../components/Button/index";
import monke from "../assets/monke_normal.png";
import DialogBox from "../components/DialogBox";
const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const MonkeImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  height: auto;
`;
export default function Homepage() {
  return (
    <>
      <BackgroundImage src={background} />
      <div className="img-cont">
        <MonkeImage src={monke} />
        <DialogBox />
      </div>
      <LeftButtons />
      <Button text={"START"} />
    </>
  );
}
