import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Projects from "./components/projects/Project";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default App;
