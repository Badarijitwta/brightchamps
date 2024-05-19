import styled from "styled-components";
import "./homepage.css";
// import { LeftButtons } from "../../components/LeftButtons";
import Button from "../../components/Button/index";
import monke from "../../assets/monke_normal.png";

import DialogBox from "./../../components/DialogBox/index";
import { LeftButtons } from "./../../components/LeftButtons/index";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import ProgressBar from "../../components/ProgressBar";
import InstructionScreen from "../IntructionScreen";
import Game from "../GameArena";

const MonkeImage = styled.img`
  max-width: 350px;
  grid-area: 1/1;
`;

const pages = [
  {
    pageId: 1,
    dialogText: "Welcome Kiddo!",
    buttonText: "START",
  },
  {
    pageId: 2,
    dialogText: "I am Mizo, I love Bananas 🍌",
    buttonText: "NEXT",
  },
  {
    pageId: 3,
    dialogText: "Can you help me get some ? 🤔",
    buttonText: "YES",
  },
];

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showGame, setShowGame] = useState(false);
  // const [previousPage, setPreviousPage] = useState(1);
  const currentPageObj = pages.find((page) => {
    return page.pageId === currentPage;
  });
  // console.log(currentPageObj);

  const handleClick = () => {
    if (currentPage === pages.length) {
      setShowInstructions(true);
      // setPreviousPage(currentPage);
    } else {
      setCurrentPage(currentPage === pages.length ? 1 : currentPage + 1);
    }
  };

  const handlePlayClick = () => {
    setShowGame(true);
    console.log("PLAY");
  };

  const handleBackClick = () => {
    if (showGame) {
      setShowGame(false);
      setShowInstructions(true);
    } else if (showInstructions) {
      setShowInstructions(false);
      // setCurrentPage(previousPage);
    } else if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-top">
        <div
          className="progress-bar-cont"
          style={{ visibility: currentPage < 2 ? "hidden" : "visible" }}
        >
          <ProgressBar />
        </div>

        <div className="dialog-box-cont">
          <div
            className="back-btn-cont"
            style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
          >
            <BackButton handleBack={handleBackClick} />
          </div>

          <div
            style={{
              visibility: !showInstructions ? "visible" : "hidden",
            }}
          >
            <DialogBox dialogText={currentPageObj?.dialogText} />
          </div>
        </div>
      </div>
      <div className="homepage-mid">
        {!showInstructions && !showGame ? (
          <MonkeImage src={monke} />
        ) : showGame ? (
          <Game />
        ) : (
          <InstructionScreen />
        )}
        <div className="homepage-bottom">
          <div className="homepage-bottom-inside">
            <div
              style={{ visibility: currentPage === 3 ? "hidden" : "visible" }}
            >
              <LeftButtons />
            </div>
            <div style={{ visibility: showGame ? "hidden" : "visible" }}>
              <Button
                text={showInstructions ? "PLAY" : currentPageObj?.buttonText}
                handleClick={showInstructions ? handlePlayClick : handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
