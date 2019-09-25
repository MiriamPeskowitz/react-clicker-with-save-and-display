import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import AddButton from './AddButton'
import Reset from './Reset'
import SubtractButton from './SubtractButton'
import SaveResults from './SaveResults'

function App() {

	const [count, setCount] = useState(0)//sets the state, getter.setter

	const incrementCount = increment => {
		setCount(count + increment)
	}

	const decrementCount = decrement => {
		setCount(count + decrement)
	}
	//method -- takes in increment , adds it to count
	const reset = () => {
		setCount(0)
	}

	

	const display = () => {
		console.log(`save ${count} to page`)	
		document.getElementById('show').innerHTML += count
		document.getElementById("show").innerHTML += "<br>";
	}


	return (
		<div>
			<AddButton increment={1} onClickFunction={incrementCount}/>
			<AddButton increment={10} onClickFunction={incrementCount}/>
			<AddButton increment={100} onClickFunction={incrementCount}/>
			<AddButton increment={1000} onClickFunction={incrementCount}/>	
		
		   	<SubtractButton decrement={-2} onClickFunction={decrementCount}/>
			<SubtractButton decrement={-10} onClickFunction={decrementCount}/>
			<SubtractButton decrement={-100} onClickFunction={decrementCount}/>
		
			<span> {count} </span>
			<Reset reset={reset}/>
			<SaveResults  onClickFunction={display} />
		</div>	
	)
}


ReactDOM.render(<App />, document.getElementById('root'));
