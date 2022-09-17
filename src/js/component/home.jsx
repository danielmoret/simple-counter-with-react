import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";
import { Countdown } from "./Countdown.jsx";

//create your first component
const Home = (props) => {
return (
	<>	
		<SecondsCounter 
		seconds={props.seconds} render={props.render} pause={props.pause} intervalId={props.intervalId}
		countdown={props.countdown}/>
		{/* <SecondsCounter seconds={props.seconds} render={props.render} intervalId={props.intervalId}/> */}
		<Countdown seconds={props.seconds} render={props.render} pause={props.pause} intervalId={props.intervalId}
		countdown={props.countdown}/>
	</>
);
};

export default Home;
