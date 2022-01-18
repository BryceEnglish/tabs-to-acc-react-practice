import React from "react";
import Accordion from "../components/Accordion/Accordion";
import Tabs from "../components/Tabs/Tabs";
import "./App.css";

function App(props) {
  const isMobile = props.isMobile;
  if (isMobile) {
    return <Accordion />;
  }
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
