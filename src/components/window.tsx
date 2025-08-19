import Draggable from "react-draggable";
import React from "react";
import Header from "./header.tsx";

interface WindowProps {
  onClose: () => void;
  titleText?: string;
  size?: { width: number; height: number };
  children: React.ReactNode;
}

function Window({ onClose, titleText, size }: WindowProps) {
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
        className={` bg-white flex flex-col items-start justify-center rounded-lg drop-shadow-lg`}
        style={{ width: size?.width, height: size?.height }}
      >
        <Header onClose={onClose} titleText={titleText} />
      </div>
    </Draggable>
  );
}

export default Window;
