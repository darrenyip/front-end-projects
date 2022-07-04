import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url =
    "https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80";

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 40);
    if (seconds == 100) clearInterval(interval);
    return () => clearInterval(interval);
  }, [seconds]);
  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  return (
    <div className="relative h-screen">
      <div
        className="bg"
        style={{ filter: `blur(${scale(seconds, 0, 100, 30, 0)}px)` }}
      ></div>
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] font-bold text-[50px]"
        style={{ opacity: scale(seconds, 0, 100, 1, 0) }}
      >
        loading {seconds} %
      </div>
    </div>
  );
}

export default App;
