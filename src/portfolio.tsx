import Draggable from "react-draggable";
import React from "react";
import Header from "./components/header.tsx";
import Socials from "./components/socials.tsx";

interface PortfolioProps {
  onClose: () => void;
}

function Portfolio({ onClose }: PortfolioProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const x = window.innerWidth / 2 - 192 * 2;
  const y = window.innerHeight / 2 - 128 * 2;

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-hande"
      defaultPosition={{ x: x, y: y }}
      defaultClassName="fixed inset-0 z-1"
    >
      <div
        ref={nodeRef}
        className="drag-hande w-128 h-72 bg-white flex flex-col items-start justify-center rounded-lg drop-shadow-lg"
      >
        <Header onClose={onClose} titleText="portfolio" />
        <div className="grid grid-cols-3 mt-8 items-center gap-8 self-center">
          <Socials
            link="https://justadeer.itch.io/"
            imgSrc="src/assets/itch.webp"
            titleText="Itch.io"
          />
          <Socials
            link="https://github.com/JustADeer"
            imgSrc="src/assets/github.webp"
            titleText="Github"
          />
          <Socials
            link="https://www.youtube.com/@justadeer"
            imgSrc="src/assets/youtube.webp"
            titleText="Youtube"
          />
        </div>
      </div>
    </Draggable>
  );
}

export default Portfolio;
