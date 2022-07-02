import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const data = [
    {
      id: 1,
      title: "1",
    },
    {
      id: 2,
      title: "2",
    },
    {
      id: 3,
      title: "3",
    },
    {
      id: 4,
      title: "4",
    },
  ];
  const handleSubmit = () => {
    alert("submited");
    setStep(1);
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          id="progress"
          style={{ width: ((step - 1) / 3) * 100 + "%" }}
        ></div>
        {data.map((el, index) => (
          <div key={index}>
            <div className={step >= el.id ? "circle active" : "circle"}>
              {el.title}
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn"
        id="prev"
        disabled={step == 1}
        onClick={() => setStep((step) => step - 1)}
      >
        Prev
      </button>
      {step < 4 && (
        <button
          className="btn"
          id="next"
          onClick={() => setStep((step) => step + 1)}
        >
          Next
        </button>
      )}
      {step === 4 && (
        <button className="btn" id="next" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}

export default App;
