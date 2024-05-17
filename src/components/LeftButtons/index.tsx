import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  max-width: 40vw;
  height: 100px;
  border: 2px solid red;
  position: absolute;
  bottom: -0%;
`;
export function LeftButtons() {
  return (
    <>
      <Container>
        {/* <SettingsContainer>
          <SettingsImage />
        </SettingsContainer>
        <StarContainer></StarContainer> */}
      </Container>
    </>
  );
}
