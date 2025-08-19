import Draggable from "react-draggable";
import React from "react";
import Header from "./components/header.tsx";

interface FaqProps {
  onClose: () => void;
}

function Faq({ onClose }: FaqProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const x = window.innerWidth / 2 - 192 * 2;
  const y = window.innerHeight / 2 - 128 * 2;

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-handle"
      defaultPosition={{ x: x, y: y }}
      defaultClassName="fixed inset-0 z-1"
    >
      <div
        ref={nodeRef}
        className="w-176 h-108 bg-white flex flex-col items-start justify-center rounded-lg drop-shadow-lg"
      >
        <Header onClose={onClose} titleText="faq" />

        <div className="flex flex-col text-center gap-4 text-balance-300 text-black/70 text-xl w-full overflow-auto">
          <div className="mx-20 mt-12">
            <div>
              <div className="font-bold text-xl mb-2">Who are you?</div>
              <div>
                I'm a student in college learning about{" "}
                <span className="text-blue-400">Mechatronics</span> right now!
              </div>
            </div>
            <div>
              <div className="font-bold text-xl mb-2">
                What are your hobbies?
              </div>
              <div>
                I love learning new things, for example, I'm currently learning
                about machine learning and AI.
              </div>
            </div>
            <div>
              <div className="font-bold text-xl mb-2">
                How long have you been coding?
              </div>
              <div>
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
            </div>
            <div>
              <div className="font-bold text-xl mb-2">
                How long have you been coding?
              </div>
              <div>
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
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Faq;
