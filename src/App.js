import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Service from "./components/Service";
// Importing Components
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Service />
    </div>
  );
}

export default App;
