import useSound from "use-sound";
import clickSound from "../assets/click.wav";

interface AboutProps {
  titleText?: string;
  imgSrc?: string;
  link?: string;
}

function Socials({
  imgSrc = "/images/thick/png",
  titleText = "untitled",
  link = "",
}: AboutProps) {
  const [play] = useSound(clickSound);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => {
          if (link) {
            play();
            window.open(link, "_blank");
          }
        }}
        aria-label={titleText}
      >
        <img
          src={imgSrc}
          alt={titleText}
          className="max-w-16 max-h-16 min-w-16 min-h-16"
          loading="lazy"
          draggable={false}
        />
      </button>
      <a href={link} className="text-center pt-2 font-mono" target="_blank">
        {titleText}
      </a>
    </div>
  );
}

export default Socials;
