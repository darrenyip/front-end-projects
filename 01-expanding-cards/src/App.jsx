import { useState } from "react";
import { Data } from "./features/data";
import "./App.css";
function App() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="container">
      {Data.length !== 0 &&
        Data.map((el, index) => (
          <div
            key={index}
            onClick={() => setActiveId(el.id)}
            className={activeId == el.id ? "panel active" : "panel"}
            style={{ backgroundImage: `url(${el.url})` }}
          >
            <h3 className="text-white">{el.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default App;
