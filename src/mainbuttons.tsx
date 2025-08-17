import useSound from "use-sound";
import clickSound from "./assets/powerUp.wav";
import { useState } from "react";

import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Faq from "./faq";

function MainButtons() {
  const [show, setShow] = useState({
    about: false,
    contact: false,
    portfolio: false,
    faq: false,
  });
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [play] = useSound(clickSound);

  const handleToggle = (key: keyof typeof show) => {
    play();
    setShow((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDragStart = (component: string) => {
    setActiveComponent(component);
    console.log("Dragging started for:", component);
  };

  const buttonBaseClasses = `
  m-5
  flex
  flex-col
  items-center
  text-center
  hover:scale-110
  transition-transform
  duration-250
  ease-in-out
  cursor-pointer
  `;

  const imageBaseClasses = `
  max-w-14
  max-h-14
  mb-1
  drop-shadow-xl
  `;

  return (
    <div className="flex justify-center items-center flex-wrap p-4 ">
      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={() => handleToggle("about")}
      >
        <img
          src="src/assets/about.png"
          className={imageBaseClasses}
          draggable="false"
        />
        About
      </button>

      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={() => handleToggle("portfolio")}
      >
        <img
          src="src/assets/portfolio.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        Portfolio
      </button>

      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={() => handleToggle("faq")}
      >
        <img
          src="src/assets/faq.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        FAQ
      </button>

      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={() => handleToggle("contact")}
      >
        <img
          src="src/assets/email.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        Contact
      </button>

      {["about", "contact", "portfolio", "faq"].map((key) => {
        const Component =
          key === "about"
            ? About
            : key === "contact"
            ? Contact
            : key === "portfolio"
            ? Portfolio
            : Faq;
        return (
          <div
            key={key}
            onClick={() => handleDragStart(key)}
            onFocus={() => handleDragStart(key)}
            style={{ zIndex: activeComponent === key ? 2 : 1 }}
          >
            {show[key as keyof typeof show] && (
              <Component
                onClose={() => setShow((prev) => ({ ...prev, [key]: false }))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MainButtons;
