import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project/Project";
import Archivement from "./Components/Archivement/Archivement";
import Education from "./Components/Education";
import Contactus from "./Components/Contactus";
import Menu from "./Components/Menu";
import React, { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="App">
      <div className="sm:hidden hidden md:block lg:block 2xl:block">
        <Menu setShowMenu={setShowMenu} />
      </div>
      {showMenu === true ? <Menu setShowMenu={setShowMenu} /> : <div />}
      <Home showMenu={showMenu} setShowMenu={setShowMenu} />
      <About />
      <Project />
      <Archivement />
      <Education />
      <Contactus />
    </div>
  );
}

export default App;
