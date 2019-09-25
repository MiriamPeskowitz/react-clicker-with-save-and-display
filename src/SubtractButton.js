import React from 'react'

const SubtractButton = ({ decrement, onClickFunction}) => {

	const handleClick = () => {
		onClickFunction(decrement)
	}

	//onClick is the event -- it calls handleClick function, which evokes the prop
	//erty onClickFunction, which is set equal to incrementCount 


  return <button onClick={handleClick} >{decrement}</button>
}

export default SubtractButton
