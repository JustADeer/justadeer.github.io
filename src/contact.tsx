import Draggable from "react-draggable";
import React from "react";
import Header from "./components/header.tsx";

interface ContactProps {
  onClose: () => void;
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard:", text);
  });
};

function Contact({ onClose }: ContactProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const x = window.innerWidth / 2 - 192 * 2;
  const y = window.innerHeight / 2 - 128 * 2;

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      handle=".drag-handle"
      defaultPosition={{ x: x, y: y }}
      defaultClassName="fixed inset-0"
    >
      <div
        ref={nodeRef}
        className="w-128 h-148 bg-white flex flex-col items-start justify-center rounded-lg drop-shadow-lg"
      >
        <Header onClose={onClose} titleText="contact" />

        {/*Paragraph*/}
        <div className="flex flex-col justify-center text-center text-balance-300 mx-20 ">
          <h1 className="text-2xl font-bold italic mb-2 mt-8">Funny Mails!</h1>
          <div className="align-middle">
            This is my work email, so please don't spam the email! I don't
            really use social media much, so this is the best way of contacting
            me{" "}
          </div>
          <img
            src="\images\thick.webp"
            loading="lazy"
            draggable="false"
            fetchPriority="low"
            className="w-48 align-middle flex my-12 self-center drop-shadow-lg hover:scale-105 transition-transform duration-250 ease-in-out"
          ></img>
          <div>
            This is my email:{" "}
            <span
              className="cursor-pointer font-semibold underline"
              onClick={() => {
                copyToClipboard("shaquillesouzan@proton.me");
                alert("Copied to clipboard!");
              }}
            >
              shaquillesouzan@proton.me
            </span>
          </div>
          or press the button below to open your email application directly.
          <button
            className="p-2 bg-orange-300 rounded-xl border-amber-800 border-2 cursor-pointer align-middle hover:scale-110 transition-transform duration-250 ease-in-out mt-2 w-1/3 self-center"
            onClick={() => window.open("mailto:shaquillesouzan3@gmail.com")}
          >
            Email Me!
          </button>
        </div>
      </div>
    </Draggable>
  );
}

export default Contact;
