import axios from "axios";
import { useState } from "react";

function Advice(params) {
    const [response, setResponse] = useState(null);
	const fetchAdvice = async () => {
		try {
			const res = await axios.get(`https://api.adviceslip.com/advice`)
			
			// Set the response to the state.
			setResponse(res.data);
		} catch (err) {
			console.log(err);
		}
	};

    console.log(response)
    
    return (
		<div className="container">
			<button onClick={() => fetchAdvice()}>Do you need an advice today?</button>
			{
				// If the response is not null, display the quote.
				response && <span><h1>{response.slip.advice}</h1></span>
			}
		</div>
	);
}

export default Advice;