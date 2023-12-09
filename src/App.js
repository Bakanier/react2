import React from "react";
import Events from "./Events";
import Header from "./Components/Header";
import MainContent from "./Components/Maincontent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Events/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
