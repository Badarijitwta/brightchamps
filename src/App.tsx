import "./App.css";
import styled from "styled-components";
import background from "./assets/background1.png";
import Homepage from "./pages/HomePage/Homepage";
// import GameArena from "./pages/GameArena";
const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;
function App() {
  return (
    <>
      <BackgroundImage src={background} />
      <Homepage />
      {/* <GameArena /> */}
    </>
  );
}

export default App;
