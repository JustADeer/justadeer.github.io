import Welcome from "./welcome";
import MainButtons from "./mainbuttons";
import useIsMobile from "./components/useIsMobile";

function Mainwel() {
  const { isMobile } = useIsMobile();
  return (
    <div
      className="align-middle flex h-screen w-screen flex-col items-center justify-center 
    bg-base-100 text-slate-900 absolute"
    >
      {isMobile ? (
        <>
          <Welcome></Welcome>
          <div className="my-4" />
          <MainButtons></MainButtons>
        </>
      ) : (
        <div className="relative border-2 overflow-hidden border-s-slate-950 rounded-2xl w-4/9 h-3/5 bg-white flex flex-col items-center justify-center">
          <div className="rounded-full p-80 bg-red-500/70 absolute left-10/13 top-1/2 hover:bg-red-500/80 duration-200 hover:scale-105" />
          <div className="rounded-full p-40 bg-pink-500/70 absolute right-10/13 bottom-2/3 hover:bg-pink-500/80 duration-200 hover:scale-105" />
          <Welcome></Welcome>
          <div className="my-4" />
          <MainButtons></MainButtons>
        </div>
      )}
      <p className="absolute bottom-2 text-sm">© {new Date().getFullYear()} Souzan Shaquille</p>
    </div>
  );
}

export default Mainwel;
