import "./instructionscreen.css";

// import ProgressBar from "../../components/ProgressBar/index";
import CardStack from "../../components/CardStack/index";

const InstructionScreen: React.FC = () => {
  return (
    <>
      <div className="mid-item">
        <div className="mid-item-cont">
          <CardStack
            number={"01"}
            bgStyle={{
              backgroundColor: "#ffbc0b",
              boxShadow: "0px 5.52px 0px 0px #d29901",
            }}
            cardText={"Select a pink card"}
            cardBottomText="It has images."
          />
          <CardStack
            number={"02"}
            bgStyle={{
              backgroundColor: "rgba(166, 205, 37, 1)",
              boxShadow: "0px 5.52px 0px 0px rgba(139, 173, 29, 1) ",
            }}
            cardText={"Select a blue card"}
            cardBottomText="It has alphabets."
          />
          <CardStack
            number={"03"}
            bgStyle={{
              backgroundColor: "rgba(251, 153, 61, 1)",
              boxShadow: "0px 5.52px 0px 0px rgba(197, 98, 4, 1)",
            }}
            cardText={"Its a match !"}
            cardBottomText="otherwise retry :("
          />
        </div>
      </div>
    </>
  );
};

export default InstructionScreen;
