import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [leftShown, setLeftShown] = useState(false);
  const [rightShown, setRightShown] = useState(false);

  function getHoverPart() {
    if (leftShown) {
      return "left-hover";
    } else if (rightShown) {
      return "right-hover";
    }
    return "";
  }

  return (
    <div
      className={
        "App relative bg-red-300 flex h-screen w-[100vw] " + getHoverPart()
      }
    >
      <div
        className="left overflow-hidden flex justify-center items-center"
        onMouseEnter={() => setLeftShown(true)}
        onMouseLeave={() => setLeftShown(false)}
      >
        <div className="absolute flex flex-col w-[400px] items-center">
          <div className="font-bold text-[60px] mb-8 font-[40px] text-white">
            Playstaion 5
          </div>
          <button className="font-bold border-4 text-white border-white bg-transparent hover:bg-white w-[200px] h-[100px]">
            Buy Now
          </button>
        </div>
      </div>
      <div
        className="right overflow-hidden flex justify-center items-center"
        onMouseEnter={() => setRightShown(true)}
        onMouseLeave={() => setRightShown(false)}
      >
        <div className="absolute flex flex-col w-[450px] items-center">
          <div className="text-center font-bold text-[60px] mb-8 font-[40px] text-white">
            X Box Series X
          </div>
          <button className=" text-center font-bold border-4 text-white border-white bg-transparent hover:bg-white w-[200px] h-[100px]">
            Buy Now
          </button>
        </div>
        {/* <div className="font-bold text-[60px] mb-8 font-[40px] text-white">
          X BOX Series X
        </div>
        <button className="font-bold border-4 text-white border-white bg-transparent hover:bg-white w-[200px] h-[100px]">
          Buy Now
        </button> */}
      </div>
    </div>
  );
}

export default App;
