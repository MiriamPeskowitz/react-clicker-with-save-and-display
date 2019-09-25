import React from 'react'

const AddButton = ({ increment, onClickFunction}) => {

	const handleClick = () => {
		onClickFunction(increment)
	}

	//onClick is the event -- it calls handleClick function, which evokes the prop
	//erty onClickFunction, which is set equal to incrementCount 


  return <button onClick={handleClick} >+{increment}</button>
}

export default AddButton


