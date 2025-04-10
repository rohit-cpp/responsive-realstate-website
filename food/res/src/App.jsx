import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/about";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
    </div>
  );
};

export default App;
