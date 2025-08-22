import useSound from "use-sound";
import clickSound from "./assets/powerUp.wav";
import { useState } from "react";

import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Faq from "./faq";
import useIsMobile from "./components/useIsMobile";

const BUTTONS = [
  {
    key: "about",
    label: "about",
    img: "/images/about.webp",
    component: About,
  },
  {
    key: "portfolio",
    label: "portfolio",
    img: "/images/portfolio.webp",
    component: Portfolio,
  },
  {
    key: "faq",
    label: "faq",
    img: "/images/faq.webp",
    component: Faq,
  },
  {
    key: "contact",
    label: "contact",
    img: "/images/email.webp",
    component: Contact,
  },
];

function MainButtons() {
  const [show, setShow] = useState({
    about: false,
    contact: false,
    portfolio: false,
    faq: false,
  });

  const [play] = useSound(clickSound);

  const handleToggle = (key: keyof typeof show) => {
    play();
    setShow((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const buttonBaseClasses = `
    flex
    flex-col
    items-center
    hover:scale-110
    transition-transform
    duration-250
    cursor-pointer
    aspect-square
    max-w-84
    max-h-84
    p-5
  `;

  const imageBaseClasses = `
    w-14
    h-14
    min-w-8
    min-h-8
    max-w-14
    max-h-14
    drop-shadow-xl
  `;

  const { isMobile } = useIsMobile();

  return (
    <div
      className={
        isMobile
          ? "grid grid-cols-2 justify-center items-center"
          : "flex flex-row justify-center items-center"
      }
    >
      {BUTTONS.map(({ key, label, img }) => (
        <div className={isMobile ? "m-4" : "m-0"} key={key}>
          <button
            key={key}
            className={
              isMobile
                ? `${buttonBaseClasses} bg-blue-300/50 rounded-xl`
                : buttonBaseClasses
            }
            onClick={() => handleToggle(key as keyof typeof show)}
            aria-label={label}
          >
            <img
              src={img}
              className={imageBaseClasses}
              draggable="false"
              alt={`${label} button icon`}
              loading="lazy"
              fetchPriority="high"
            />
            {isMobile ? null : <span>{label}</span>}
          </button>
          {isMobile ? (
            <span className="mt-2 flex justify-center items-center w-full font-semibold font-mono">
              {label}
            </span>
          ) : null}
        </div>
      ))}

      {BUTTONS.map(({ key, component: Component }) =>
        show[key as keyof typeof show] ? (
          <Component
            key={key}
            onClose={() => setShow((prev) => ({ ...prev, [key]: false }))}
          />
        ) : null
      )}
    </div>
  );
}

export default MainButtons;
