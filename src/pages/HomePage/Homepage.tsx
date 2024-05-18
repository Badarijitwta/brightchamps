import styled from "styled-components";
import "./homepage.css";
// import { LeftButtons } from "../../components/LeftButtons";
import Button from "../../components/Button/index";
import monke from "../../assets/monke_normal.png";

import DialogBox from "./../../components/DialogBox/index";
import { LeftButtons } from "./../../components/LeftButtons/index";

const MonkeImage = styled.img`
  max-width: 350px;
  grid-area: 1/1;
`;
export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-top">
        <DialogBox dialogText={"Welcome Kiddo!"} />
      </div>
      <div className="homepage-mid">
        <MonkeImage src={monke} />
        <div className="homepage-bottom">
          <div className="homepage-bottom-inside">
            <LeftButtons />
            <Button text={"START"} />
          </div>
        </div>
      </div>
    </div>
  );
}
