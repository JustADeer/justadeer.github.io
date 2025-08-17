import Welcome from "./welcome";
import MainButtons from "./mainbuttons";

function Mainwel() {
  return (
    <div
      className="align-middle flex h-screen w-screen flex-col items-center justify-center 
    bg-[url('src/assets/bg.jpeg')] bg-auto bg-center bg-repeat text-slate-900 
    animate-[bg-scroll_10s_linear_infinite]"
      style={{
        backgroundPosition: "center",
        animationName: "bg-scroll",
        animationDuration: "5s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      <style>
        {`
        @keyframes bg-scroll {
        0% { background-position: center; }
        100% { background-position: top left; }
        }
      `}
      </style>
      <div className="relative border-2 overflow-hidden border-s-slate-950 rounded-2xl w-4/9 h-3/5 bg-white items-center">
        <div className="rounded-full p-80 bg-red-500/70 absolute left-10/13 top-1/2 hover:bg-red-500/80 duration-200 hover:scale-105" />
        <div className="rounded-full p-40 bg-pink-500/70 absolute right-10/13 bottom-2/3 hover:bg-pink-500/80 duration-200 hover:scale-105" />
        {/*dark:bg-slate-900 dark:text-white">*/}
        <Welcome></Welcome>
        <div className="my-4" />
        <MainButtons></MainButtons>
      </div>
    </div>
  );
}

export default Mainwel;
