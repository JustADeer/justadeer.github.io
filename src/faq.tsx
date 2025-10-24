import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";
import Header from "./components/header.tsx";
import windowPosition from "./components/global.tsx";
import useIsMobile from "./components/useIsMobile";

interface FaqProps {
  onClose: () => void;
}

const defaultSize = {
  x: 192,
  y: 128,
};

const detailBaseClass = `
font-bold text-xl my-2 cursor-pointer border-2 p-2 bg-orange-300/50 select-none
`;

const divBaseClass = `ml-8 transition-all duration-300 ease-out text-justify mt-2 mb-4`;

function Faq({ onClose }: FaqProps) {
  const { isMobile } = useIsMobile();
  const nodeRef = React.useRef<HTMLDivElement>(null);
  if (windowPosition.faq.x === 0) {
    windowPosition.faq.x = window.innerWidth / 2 - defaultSize.x * 2;
    windowPosition.faq.y = window.innerHeight / 2 - defaultSize.y * 2;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={nodeRef}
        className={`fixed left-0 right-0 bottom-0 z-50 w-full h-[50vh] max-h-[90vh] bg-white rounded-t-2xl drop-shadow-2xl transform transition-all duration-300 ease-in-out
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
          <div className="pt-4" />

          <div className="lowercase font-mono text-balance-300 text-black/70 text-xl w-full overflow-y-scroll mt-10">
            <div className="mx-20 mt-10 items-start">
              <details>
                <summary className={detailBaseClass}>Who are you?</summary>
                <div className={divBaseClass}>
                  I'm a student in college learning about{" "}
                  <span className="text-blue-400">Mechatronics</span> right now!
                </div>
              </details>

              <details>
                <summary className={detailBaseClass}>
                  What are your hobbies?
                </summary>
                <div className={divBaseClass}>
                  I love learning new things, for example, I'm currently
                  learning about machine learning and AI.
                </div>
              </details>

              <details>
                <summary className={detailBaseClass}>
                  How long have you been coding?
                </summary>
                <div className={divBaseClass}>
                  I've been coding since I was in middle school, so it's been
                  around 4 years now. Back then I started with coding games in{" "}
                  <a
                    href="https://godotengine.org/"
                    className="text-blue-400"
                    target="_blank"
                  >
                    Godot Engine
                  </a>
                  , and now I am learning about web development.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-handle"
      defaultPosition={{ x: windowPosition.faq.x, y: windowPosition.faq.y }}
      defaultClassName="fixed inset-0 z-1"
    >
      <div
        ref={nodeRef}
        className={`w-192 h-128 bg-white flex flex-col items-start duration-150 rounded-lg drop-shadow-lg transition-[scale,opacity] origin-center
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <Header onClose={onClose} titleText="faq" />

        <div className="lowercase font-mono text-balance-300 text-black/70 text-xl w-full overflow-y-scroll mt-10">
          <div className="mx-20 mt-10 items-start">
            <details>
              <summary className={detailBaseClass}>Who are you?</summary>
              <div className={divBaseClass}>
                I'm a student in college learning about{" "}
                <span className="text-blue-400">Mechatronics</span> right now!
              </div>
            </details>

            <details>
              <summary className={detailBaseClass}>
                What are your hobbies?
              </summary>
              <div className={divBaseClass}>
                I love learning new things, for example, I'm currently learning
                about machine learning and AI.
              </div>
            </details>

            <details>
              <summary className={detailBaseClass}>
                How long have you been coding?
              </summary>
              <div className={divBaseClass}>
                I've been coding since I was in middle school, so it's been
                around 4 years now. Back then I started with coding games in{" "}
                <a
                  href="https://godotengine.org/"
                  className="text-blue-400"
                  target="_blank"
                >
                  Godot Engine
                </a>
                , and now I am learning about web development.
              </div>
            </details>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Faq;
