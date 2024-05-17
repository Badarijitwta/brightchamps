import "./dialogbox.css";
import styled from "styled-components";
import dialog from "../../assets/dialog.png";
const DialogImage = styled.img`
  position: absolute;
  top: 20%;
  left: 60%;
  max-width: 300px;
  height: auto;
  transform: translate(-50%, -50%);
`;

const Text = styled.h4`
  color: rgba(17, 174, 198, 1);
  font-family: Nunito;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;
const DialogBox: React.FC = () => {
  return (
    <>
      <DialogImage src={dialog} />
      <div className="dialog-text-container">
        <Text>Welcome Kiddo !</Text>
      </div>
    </>
  );
};

export default DialogBox;
