import Draggable from "react-draggable";
import React from "react";
import Header from "./components/header.tsx";

interface AboutProps {
  onClose: () => void;
}

function About({ onClose }: AboutProps) {
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
        className="w-192 h-128 bg-white flex flex-col items-start justify-center rounded-lg drop-shadow-lg"
      >
        <Header onClose={onClose} titleText="about" />

        {/*Devider */}
        <div className="mt-8 mb-8" />

        {/*Profile */}
        <div className="flex static items-center self-start ml-24">
          <div className="bg-amber-200 rounded-full w-38 h-38 border-2">
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
          <span className="ml-10 text-blue-300 text-5xl">
            Souzan Shaquille
            <div className="text-lg text-black mt-1">
              Developer, Illustrator, Student
            </div>
          </span>
        </div>

        {/*Devider */}
        <div className="w-5/6 mb-4 mt-8 border-t-2 opacity-20 flex mx-15" />

        {/*Paragraph*/}
        <div className="overflow-y-scroll text-black/70 text-xl">
          <div className=" mx-10">
            <p className=" text-wrap max-w-2xl min-w-2xl static pb-10">
              Hi i'm Souzan, I do...
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
