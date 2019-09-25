import React from 'react'

const DisplayResults = ({ display, onClickFunction}) => {

	const handleClick = () => {
		onClickFunction(display)
	}

	//onClick is the event -- it calls handleClick function, which evokes the prop
	//erty onClickFunction, which is set equal to incrementCount 


  return (

  		<div>
			<span>Saved List</span>	
  		</div>
	)

}

export default DisplayResults