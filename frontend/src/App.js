import { Link, Box, Container } from "@chakra-ui/react";
import ProjectContainer from "./Components/ProjectContainer";
import CardProject from "./Components/CardProject";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>Hello</p>
      {/*   <ProjectContainer /> */}
      <Skills />
      <CardProject />
      <ContactForm />
    </div>
  );
}

export default App;
