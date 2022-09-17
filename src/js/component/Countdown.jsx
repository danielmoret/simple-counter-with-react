import React from "react";

export function Countdown(props) {
  !(props.seconds > 0) ? clearInterval(props.intervalId) : true;

  let input = 0;


  const handleSubmit = (event) => {
    event.preventDefault();
    props.countdown(input);
  };

  return (
    <form className="countdown" onSubmit={handleSubmit}>
      <input
        type="number"
        min={1}
        max={9999}
        placeholder="Cuentra regresiva"
        onChange={(event) => {
          input = event.target.value;
        }}
      />
      <button className="start">Empezar cuenta regresiva</button>
    </form>
  );
}
