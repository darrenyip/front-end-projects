import { useState } from "react";
import useBookSearch from "./components/useBookSearch";
import { cookingBooks } from "./fakeCookingBooks";
import FadeInSection from "./components/FadeInSection";
import "./App.css";

function App() {
  const [query, setQuery] = useState("cooking");
  const [pageNumber, setPageNumber] = useState(1);
  // const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);
  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  // console.log(cookingBooks);

  return (
    <div className="App bg-[#efedd6] min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-[50px] font-bold">Scroll to see the animation</h1>
      {cookingBooks.map((el, index) => (
        <FadeInSection key={index}>
          <div className=" p-8 flex justify-center items-center text-white text-[25px] mb-6 w-[500px] min-h-[150px] font-bold rounded-[8px] bg-[#4682b4]">
            {el}
          </div>
        </FadeInSection>
      ))}
      {/* <input type="text" onChange={handleSearch} /> */}
      {/* {loading && (
        <div className="text-[20px]">
          Querying Data from openlibrary.org ...
        </div>
      )}
      {error && <div className="text-[20px] text-red">Error ...</div>} */}
    </div>
  );
}

export default App;
