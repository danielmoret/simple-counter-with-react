import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";

export function SecondsCounter(props) {
  function handlePlay(e) {
    props.render();
  }

  function handleStop(e) {
    clearInterval(props.intervalId);
    props.pause();
  }

  let digitOne = props.seconds % 10;
  let digitTwo = Math.floor((props.seconds / 10) % 10);
  let digitThree = Math.floor((props.seconds / 100) % 10);
  let digitFour = Math.floor((props.seconds / 1000) % 10);

  return (
	
    <div className="counter">
      <div className="digits">
        <div className="clock">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="four">{digitFour}</div>
        <div className="three">{digitThree}</div>
        <div className="two">{digitTwo}</div>
        <div className="one">{digitOne}</div>
      </div>
      {/* Botones contador */}
      <div className="buttons">
        <button className="play" onClick={handlePlay}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="stop" onClick={handleStop}>
          <FontAwesomeIcon icon={faStop} />
        </button>
      </div>
    </div>
  );
}
