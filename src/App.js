import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Service from "./components/Service";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Importing Components
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Service />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
