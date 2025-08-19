interface AboutProps {
  onClose: () => void;
  titleText?: string;
}

function Header({ onClose, titleText = "untitled" }: AboutProps) {
  return (
    <div className="drag-handle absolute top-0 w-full bg-gray-700 rounded-t-lg flex items-center justify-between px-2">
      <span className=" text-white text-2xl">{titleText}</span>
      <button
        className="cursor-pointer flex items-center mb-1"
        onClick={onClose}
      >
        <span className="text-pink-200 text-2xl hover:scale-110 active:scale-80 duration-100">
          [x]
        </span>
      </button>
    </div>
  );
}

export default Header;
