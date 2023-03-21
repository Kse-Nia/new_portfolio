import React from "react";
import { Link, Box, Container } from "@chakra-ui/react";
import CardProject from "./Components/CardProject";
import DisplayProjects from "./Components/DisplayProjects";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="App">
      <div className="custom-scrollbars__container">
        <div className="custom-scrollbars__content">
          <Navbar />
          <p>Hello</p>
          <Home />
          <Skills />
          {/*   <CardProject /> */}
          <DisplayProjects />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
