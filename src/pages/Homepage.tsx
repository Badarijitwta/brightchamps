import styled from "styled-components";
import "./homepage.css";
import background from "../assets/background2.png";
import shadow from "../assets/shadow.png";
import monke from "../assets/monke_normal.png";

const BackgroundImage = styled.img`
  width: 100%;
  height: 20rem;
  // object-fit: cover;

  @media (min-width: 1000px) {
    object-fit: cover;
  }
`;
const Container = styled.div`
  position: relative;
`;

const ShadowImage = styled.img`
  position: absolute;
`;

const MonkeyImage = styled.img`
  height: 20rem;
`;
export default function Homepage() {
  return (
    <>
      <Container>
        <BackgroundImage src={background} />
        <ShadowImage src={shadow} />
        <MonkeyImage src={monke} />
      </Container>
    </>
  );
}
