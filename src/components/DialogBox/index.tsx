import "./dialogbox.css";
import styled from "styled-components";
import dialog from "../../assets/dialog.png";
const DialogImage = styled.img`
  grid-area: 1/1;
`;

const Text = styled.h4`
  color: rgba(17, 174, 198, 1);
  font-family: Nunito;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;

interface DialogBoxProps {
  dialogText: string;
}
const DialogBox: React.FC<DialogBoxProps> = ({ dialogText }) => {
  return (
    <>
      <div className="dialog-box">
        <DialogImage src={dialog} />
        <div className="dialog-text-container">
          <Text>{dialogText}</Text>
        </div>
      </div>
    </>
  );
};

export default DialogBox;
