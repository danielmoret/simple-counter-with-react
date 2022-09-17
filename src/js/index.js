//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

function pause() {
  ReactDOM.render(
    <Home seconds={counter} render={renderizar} />,
    document.querySelector("#app")
  );
}

function renderizar() {
  let refreshIntervalId = setInterval(() => {
    ReactDOM.render(
      <Home
        seconds={counter + 1}
        render={renderizar}
        pause={pause}
        intervalId={refreshIntervalId}
        countdown={countdown}
      />,
      document.querySelector("#app")
    );
    if (counter < 10000) {
      counter++;
    } else {
      counter = 0;
    }
  }, 1000);
}

function countdown(numero) {
  const refreshIntervalId2 = setInterval(() => {
    ReactDOM.render(
      <Home
        seconds={numero}
        render={renderizar}
        pause={pause}
        intervalId={refreshIntervalId2}
        countdown={countdown}
      />,
      document.querySelector("#app")
    );
    if (counter >= 0) {
      numero--;
    } else {
      ReactDOM.render(
        <Home
          seconds={counter}
          render={renderizar}
          pause={pause}
          countdown={countdown}
        />,
        document.querySelector("#app")
      );
    }
  }, 1000);
}

ReactDOM.render(
  <Home
    seconds={counter}
    render={renderizar}
    pause={pause}
    countdown={countdown}
  />,
  document.querySelector("#app")
);
