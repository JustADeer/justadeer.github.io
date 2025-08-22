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
      <img
        src={imgSrc}
        alt={titleText}
        className="max-w-16 max-h-16 min-w-16 min-h-16 drop-shadow-lg hover:scale-110 transition-transform duration-250 ease-in-out"
        onClick={() => {
          if (link) {
            play();
            window.open(link, "_blank");
          }
        }}
        loading="lazy"
        draggable={false}
      />
      <a href={link} className="font-bold text-center" target="_blank">
        {titleText}
      </a>
    </div>
  );
}

export default Socials;
