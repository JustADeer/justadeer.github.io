import { useRef } from "react"; // 1. Import useRef
import windowPosition, { windowPositionKey } from "./global";
import useSound from "use-sound";
import clickSound from "../assets/powerUp2.wav";

interface AboutProps {
  onClose: () => void;
  titleText?: string;
}

function Header({ onClose, titleText = "untitled" }: AboutProps) {
  const [play] = useSound(clickSound);
  // 2. Create a ref to hold the header's div element
  const headerRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    const key = titleText as windowPositionKey;

    // 3. Check if the ref is attached and the key is valid
    if (headerRef.current && titleText && titleText in windowPosition) {
      // Get the element's position relative to the viewport
      const rect = headerRef.current.getBoundingClientRect();

      // Update the global position object with the real coordinates
      windowPosition[key].x = rect.left;
      windowPosition[key].y = rect.top;
    }
    play();
    console.log(windowPosition);
    onClose();
  };

  return (
    // 4. Attach the ref to the div element
    <div
      ref={headerRef}
      className="drag-handle absolute top-0 w-full bg-base-200 rounded-t-lg flex items-center justify-between px-2 z-10"
    >
      <span className="text-base-content text-2xl font-mono">{titleText}</span>
      <button
        className="btn btn-sm btn-circle btn-ghost"
        onClick={handleClose}
      >
        <span className="text-base-content text-xl">
          ✕
        </span>
      </button>
    </div>
  );
}

export default Header;
