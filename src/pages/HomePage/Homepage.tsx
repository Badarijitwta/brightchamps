import styled from "styled-components";
import "./homepage.css";
// import { LeftButtons } from "../../components/LeftButtons";
import Button from "../../components/Button/index";
import monke from "../../assets/monke_normal.png";

import DialogBox from "./../../components/DialogBox/index";
import { LeftButtons } from "./../../components/LeftButtons/index";
import { useState } from "react";
import BackButton from "../../components/BackButton";

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

  const currentPageObj = pages.find((page) => {
    return page.pageId === currentPage;
  });
  console.log(currentPageObj);

  const handleClick = () => {
    setCurrentPage(currentPage === pages.length ? 1 : currentPage + 1);
  };

  const handleBackClick = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-top">
        {currentPage > 1 ? (
          <div className="back-btn-cont">
            <BackButton handleBack={handleBackClick} />
          </div>
        ) : (
          ""
        )}
        <DialogBox dialogText={currentPageObj?.dialogText} />
      </div>
      <div className="homepage-mid">
        <MonkeImage src={monke} />
        <div className="homepage-bottom">
          <div className="homepage-bottom-inside">
            <LeftButtons />
            <Button
              text={currentPageObj?.buttonText}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
