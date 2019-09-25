import React from 'react'

const Reset = ({ reset }) => {

	const handleClick = () => {
		reset()
	}

	
	//onClick is the event -- it calls handleClick function, which evokes the prop
	//erty onClickFunction, which is set equal to incrementCount 


  return <button onClick={handleClick}>Reset</button>
}

export default Reset


