import { useState } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";

function App() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const handleToggle = () => {
    setToggleSearch((prev) => !prev);
  };
  return (
    <div className="purple-bg flex h-screen w-full justify-center items-center">
      <div className="search-bar flex ">
        <input
          type="text"
          placeholder="Search"
          className={toggleSearch ? "input-field active" : "input-field"}
        />
        <button
          onClick={handleToggle}
          className="p-2 w-[50px] h-[50px] bg-white flex justify-center items-center"
        >
          <img src={SearchIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
