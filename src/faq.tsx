import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";
import Header from "./components/header.tsx";
import windowPosition from "./components/global.tsx";

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

const divBaseClass = `ml-8 transition-all duration-300 ease-out text-justify transform group-open:scale-100 group-open:opacity-100 mt-2 mb-4`;

function Faq({ onClose }: FaqProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  if (windowPosition.faq.x === 0) {
    windowPosition.faq.x = window.innerWidth / 2 - defaultSize.x * 2;
    windowPosition.faq.y = window.innerHeight / 2 - defaultSize.y * 2;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
