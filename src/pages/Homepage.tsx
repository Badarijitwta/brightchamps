import styled from "styled-components";
import "./homepage.css";
import background from "../assets/background_new.png";

const BackgroundImage = styled.img`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;
export default function Homepage() {
  return (
    <>
      <BackgroundImage src={background} />
    </>
  );
}
