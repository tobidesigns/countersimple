import React, {useState, useEffect} from "react";
import CounterComponent from "./CounterComponent.jsx";

const Home = () => {

	let [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
		  setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);
	
		return () => clearInterval(intervalId);
	  }, []);


	
	return (
		<CounterComponent value={seconds}/>
	);
};

export default Home;
