import "./App.css";
import React from "react";
import { useState } from "react";
import SearchBooks from "./SearchBooks";
import Shelf from "./Shelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
      ) : (
        <>
          <Shelf
            showSearchPage={showSearchPage}
            setShowSearchpage={setShowSearchpage}
          />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
