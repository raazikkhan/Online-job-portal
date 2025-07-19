import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Jobcard from "./Components/Jobcard";

import React from "react";

function pages() {
  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar />
      <Jobcard />
    </div>
  );
}

export default pages;
