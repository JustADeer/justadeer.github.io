import useIsMobile from "./components/useIsMobile";

function Welcome() {
  const { isMobile } = useIsMobile();
  return (
    <span
      className={
        isMobile
          ? "text-[55px] font-bold text-center align-middle flex flex-col items-center justify-center"
          : "text-[65px] font-bold text-center align-middle flex flex-col items-center justify-center"
      }
    >
      <span>
        hi! <span className="text-blue-300">i'm souzan</span>
      </span>
      <span
        className={
          isMobile
            ? "text-[20px]  font-normal flex text-black/45 justify-center items-center gap-2"
            : "text-[25px] font-normal flex text-black/45 justify-center items-center gap-2"
        }
      >
        <span>developer</span>
        <span>·</span>
        <span>ilustrator</span>
        <span>·</span>
        <span>student</span>
      </span>
    </span>
  );
}

export default Welcome;
