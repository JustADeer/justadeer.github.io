import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";
import Header from "./components/header.tsx";
import Socials from "./components/socials.tsx";
import windowPosition from "./components/global.tsx";

interface PortfolioProps {
  onClose: () => void;
}

const defaultSize = {
  x: 128,
  y: 72,
};

function Portfolio({ onClose }: PortfolioProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  if (windowPosition.portfolio.x === 0) {
    windowPosition.portfolio.x = window.innerWidth / 2 - defaultSize.x * 2;
    windowPosition.portfolio.y = window.innerHeight / 2 - defaultSize.y * 2;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-handle"
      defaultPosition={{
        x: windowPosition.portfolio.x,
        y: windowPosition.portfolio.y,
      }}
      defaultClassName="fixed inset-0 z-1 origin-center"
    >
      <div
        ref={nodeRef}
        className={`w-128 h-72 bg-white flex flex-col items-start justify-center duration 150 rounded-lg drop-shadow-lg transition-[scale,opacity] origin-center
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <Header onClose={onClose} titleText="portfolio" />
        <div className="grid grid-cols-3 mt-8 items-center gap-8 self-center">
          <Socials
            link="https://justadeer.itch.io/"
            imgSrc="/images/itch.svg"
            titleText="Itch.io"
          />
          <Socials
            link="https://github.com/JustADeer"
            imgSrc="/images/github.svg"
            titleText="Github"
          />
          <Socials
            link="https://www.youtube.com/@justadeer"
            imgSrc="/images/youtube.svg"
            titleText="Youtube"
          />
        </div>
      </div>
    </Draggable>
  );
}

export default Portfolio;
