import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";
import Header from "./components/header.tsx";
import Socials from "./components/socials.tsx";
import windowPosition from "./components/global.tsx";
import useIsMobile from "./components/useIsMobile";

interface PortfolioProps {
  onClose: () => void;
}

const defaultSize = {
  x: 128,
  y: 96,
};

function Portfolio({ onClose }: PortfolioProps) {
  const { isMobile } = useIsMobile();
  const nodeRef = React.useRef<HTMLDivElement>(null);
  if (windowPosition.portfolio.x === 0) {
    windowPosition.portfolio.x = window.innerWidth / 2 - defaultSize.x * 2;
    windowPosition.portfolio.y = window.innerHeight / 2 - defaultSize.y * 2;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={nodeRef}
        className={`fixed left-0 right-0 bottom-0 z-50 w-full h-[35vh] max-h-[90vh] bg-white rounded-t-2xl drop-shadow-2xl transform transition-all duration-300 ease-in-out
          ${
            visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`w-full h-full transition-all duration-400 ease-in-out origin-bottom ${
            visible ? "scale-y-100" : "scale-y-50"
          }`}
        >
          <Header onClose={onClose} titleText="about" />
          <div className="py-4" />
          <div className="grid grid-cols-3 mt-8 items-center gap-8 self-center mx-16">
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
            <Socials
              link="https://www.kaggle.com/justadeer"
              imgSrc="/images/kaggle.svg"
              titleText="Kaggle"
            />
            <Socials
              link="https://justadeer.hashnode.dev/"
              imgSrc="/images/hashnode.png"
              titleText="Hashnode"
            />
            <Socials
              link="https://www.linkedin.com/in/muhammad-souzan-shaquille-6b6834293/"
              imgSrc="/images/ln.png"
              titleText="Linkein"
            />
          </div>
        </div>
      </div>
    );
  }

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
        className={`w-128 h-96 bg-white flex flex-col items-start justify-center duration 150 rounded-lg drop-shadow-lg transition-[scale,opacity] origin-center
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
          <Socials
            link="https://www.kaggle.com/justadeer"
            imgSrc="/images/kaggle.svg"
            titleText="Kaggle"
          />
          <Socials
            link="https://justadeer.hashnode.dev/"
            imgSrc="/images/hashnode.png"
            titleText="Hashnode"
          />
          <Socials
            link="https://www.linkedin.com/in/muhammad-souzan-shaquille-6b6834293/"
            imgSrc="/images/ln.png"
            titleText="Linkein"
          />
        </div>
      </div>
    </Draggable>
  );
}

export default Portfolio;
