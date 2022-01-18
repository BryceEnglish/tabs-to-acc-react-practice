import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <App isMobile={false} />,
  document.getElementById("root")
);
