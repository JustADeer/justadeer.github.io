import Draggable from "react-draggable";
import React, { useEffect, useState } from "react";
import Header from "./components/header.tsx";
import windowPosition from "./components/global.tsx";
import useIsMobile from "./components/useIsMobile";

interface ContactProps {
  onClose: () => void;
}

const defaultSize = {
  x: 128,
  y: 148,
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard:", text);
  });
};

function Contact({ onClose }: ContactProps) {
  const { isMobile } = useIsMobile();
  const nodeRef = React.useRef<HTMLDivElement>(null);

  if (windowPosition.contact.x === 0) {
    windowPosition.contact.x = window.innerWidth / 2 - defaultSize.x * 2;
    windowPosition.contact.y = window.innerHeight / 2 - defaultSize.y * 2;
  }

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (isMobile) {
    return (
      <div
        ref={nodeRef}
        className={`fixed left-0 right-0 bottom-0 z-50 w-full h-[55vh] max-h-[90vh] bg-white rounded-t-2xl drop-shadow-2xl transform transition-all duration-300 ease-in-out
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
          {/*Paragraph*/}
          <div className="flex flex-col justify-center text-center text-balance-300 mx-4 text-2xl">
            <h1 className="text-4xl font-bold italic mb-2 mt-8">
              Funny Mails!
            </h1>
            <div className="align-middle">
              This is my work email, so please don't spam the email! I don't
              really use social media much, so this is the best way of
              contacting me{" "}
            </div>
            {/*<img
              src="\images\thick.webp"
              loading="lazy"
              draggable="false"
              fetchPriority="low"
              className="w-48 align-middle flex my-12 self-center drop-shadow-lg hover:scale-105 transition-transform duration-250 ease-in-out"
            ></img>
             */}
            <div>
              <br></br>
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
              className="p-2 bg-orange-300/50 rounded-xl border-orange-300/90 border-2 cursor-pointer align-middle hover:scale-110 transition-transform duration-250 ease-in-out mt-2 w-1/3 self-center select-none"
              onClick={() => window.open("mailto:shaquillesouzan3@gmail.com")}
            >
              Email Me!
            </button>
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
        x: windowPosition.contact.x,
        y: windowPosition.contact.y,
      }}
      defaultClassName="fixed inset-0"
    >
      <div
        ref={nodeRef}
        className={`w-128 h-148 bg-white flex flex-col items-start justify-center duration-150 rounded-lg drop-shadow-lg transition-[scale,opacity] origin-center
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
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
            className="p-2 bg-orange-300/50 rounded-xl border-orange-300/90 border-2 cursor-pointer align-middle hover:scale-110 transition-transform duration-250 ease-in-out mt-2 w-1/3 self-center select-none"
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
