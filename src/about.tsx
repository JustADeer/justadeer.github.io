import Draggable from "react-draggable";
import React from "react";
import Header from "./components/header.tsx";
import { useEffect, useState } from "react";
import windowPosition from "./components/global.tsx";
import useIsMobile from "./components/useIsMobile";

interface AboutProps {
  onClose: () => void;
}

const defaultSize = {
  x: 192,
  y: 128,
};

function About({ onClose }: AboutProps) {
  const { isMobile } = useIsMobile();
  const nodeRef = React.useRef<HTMLDivElement>(null);
  if (windowPosition.about.x === 0) {
    windowPosition.about.x = window.innerWidth / 2 - defaultSize.x * 2;
    windowPosition.about.y = window.innerHeight / 2 - defaultSize.y * 2;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={nodeRef}
        className={`fixed left-0 right-0 bottom-0 z-50 w-full h-[80vh] max-h-[90vh] bg-white rounded-t-2xl drop-shadow-2xl transform transition-all duration-300 ease-in-out
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
          <div className="w-full h-[calc(80vh-64px)] overflow-y-auto px-4 pb-6">
            {/* Profile */}
            <div className="flex items-center justify-center mt-4">
              <div className="bg-amber-200 rounded-full w-32 h-32 drop-shadow-lg hover:scale-110 duration-150">
                <img
                  src="/videos/pfp.gif"
                  className="object-contain w-full h-full rounded-full"
                  draggable={false}
                  alt="Profile"
                  rel="preload"
                  loading="lazy"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="text-4xl text-blue-300 font-semibold">
                Souzan Shaquille
              </div>
              <div className="text-2xl font-mono tracking-tighter">
                ソウザン
              </div>
              <div className="text-xl text-black mt-4">
                Developer, Illustrator, Student
              </div>
            </div>

            <div className="w-full my-4 border-t opacity-20" />

            <div className="text-black/80 text-xl space-y-4 px-2">
              <p>
                Hi I'm Souzan, I do...
                <br />・ Game Development
                <br />・ ML and AI
                <br />・ Web Development
              </p>

              <div className="font-extrabold text-2xl">Other Interest</div>
              <p>
                Right now I am learning more about AI and ML and how to
                corporate other languages like Rust and other low level
                languages into my development workflow. Also researching on how
                the industry standards on how projects are made and maintained.
              </p>

              <div className="font-extrabold text-2xl">Foreign Languages</div>
              <p>
                I have quite advanced english level maybe around a{" "}
                <span className="text-blue-300">C1 </span>
                level of proficiency. I can express myself fluently and
                spontaneously without much obvious searching for expressions.
                I'm comfortable discussing complex subjects, understanding
                nuanced arguments, and using the language effectively for
                social, academic, and professional purposes.
                <br />
                <br />I am also interested in learning new languages. I
                currently learning Japanese. Trying to get to{" "}
                <span className="text-red-500">N4</span> level of fluency. After
                I reach that level I will try to learn Korean and Chinese.
              </p>
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
      defaultPosition={{ x: windowPosition.about.x, y: windowPosition.about.y }}
      defaultClassName="fixed inset-0 z-1"
    >
      <div
        ref={nodeRef}
        className={`w-192 h-128 bg-white flex flex-col items-start justify-center duration-150 rounded-lg drop-shadow-lg transition-[scale,opacity] origin-center
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <Header onClose={onClose} titleText="about" />

        {/*Devider */}
        <div className="mt-8 mb-8" />

        {/*Profile */}
        <div className="flex static items-center self-center">
          <div className="bg-amber-200 rounded-full w-38 h-38 drop-shadow-lg hover:scale-110 duration-150">
            <img
              src="/videos/pfp.gif"
              className="object-contain w-full h-full rounded-full"
              draggable={false}
              alt="Profile"
              rel="preload"
              loading="lazy"
              fetchPriority="high"
            />
          </div>
          <span className="ml-8 text-blue-300 text-5xl">
            Souzan Shaquille
            <div className="text-lg font-mono tracking-tighter">ソウザン</div>
            <div className="text-lg text-black mt-4">
              Developer, Illustrator, Student
            </div>
          </span>
        </div>

        {/*Devider */}
        <div className="w-5/6 mb-4 mt-8 border-t-2 opacity-20 flex mx-15" />

        {/*Paragraph*/}
        <div className="overflow-y-scroll text-black/70 text-xl">
          <div className=" mx-10 pb-10">
            <p className=" text-wrap max-w-2xl min-w-2xl static pb-10">
              Hi I'm Souzan, I do...
              <br></br>・ Game Development
              <br></br>・ ML and AI
              <br></br>・ Web Development
            </p>
            <div className="font-extrabold text-3xl mb-4">Other Interest</div>
            <p className="mb-10 text-justify">
              Right now I am learning more about AI and ML and how to corporate
              other languages like Rust and other low level languages into my
              development workflow. Also researching on how the industry
              standards on how projects are made and maintained.
            </p>
            <div className="font-extrabold text-3xl mb-4">
              Foreign Languages
            </div>
            <p className="text-justify">
              I have quite advanced english level maybe around a{" "}
              <span className="text-blue-300">C1 </span>
              level of proficiency. I can express myself fluently and
              spontaneously without much obvious searching for expressions. I'm
              comfortable discussing complex subjects, understanding nuanced
              arguments, and using the language effectively for social,
              academic, and professional purposes.
              <br />
              <br />I am also interested in learning new languages. I currently
              learning Japanese. Trying to get to{" "}
              <span className="text-red-500">N4</span> level of fluency. After I
              reach that level I will try to learn Korean and Chinese.
              <br />
            </p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default About;
