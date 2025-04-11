import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Projects from "./components/projects/Project";
import Testimonials from "./components/testimonial/Testimonials";
import Contact from "./components/contact/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
