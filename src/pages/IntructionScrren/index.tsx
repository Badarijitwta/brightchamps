// import styled from "styled-components";
import "./instructionscreen.css";
import Button from "./../../components/Button/index";
import ProgressBar from "./../../components/ProgressBar/index";
import CardStack from "./../../components/CardStack/index";
import BackButton from "../../components/BackButton";

const InstructionScreen: React.FC = () => {
  return (
    <>
      <div className="instruct-screen-container">
        <div className="top-item">
          <BackButton />
          <div className="prb-container">
            <ProgressBar />
          </div>
        </div>
        <div className="mid-item">
          <div className="mid-item-cont">
            <CardStack
              number={"01"}
              bgStyle={{
                backgroundColor: "#ffbc0b",
                boxShadow: "0px 5.52px 0px 0px #d29901",
              }}
            />
            <CardStack
              number={"02"}
              bgStyle={{
                backgroundColor: "rgba(166, 205, 37, 1)",
                boxShadow: "0px 5.52px 0px 0px rgba(139, 173, 29, 1) ",
              }}
            />
            <CardStack
              number={"03"}
              bgStyle={{
                backgroundColor: "rgba(251, 153, 61, 1)",
                boxShadow: "0px 5.52px 0px 0px rgba(197, 98, 4, 1)",
              }}
            />
          </div>
        </div>
        <div className="bottom-item">
          <Button text={"PLAY"} />
        </div>
      </div>
    </>
  );
};

export default InstructionScreen;