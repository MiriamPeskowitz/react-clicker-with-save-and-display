import React from 'react'

const SaveResults = ({ display, onClickFunction}) => {

	const handleClick = () => {
		onClickFunction(display)
	}
  return (

  		<div>
			<button onClick={handleClick} >Save</button>	
			<h3>Results</h3>
			<section id="show"></section>
  		</div>
	)

}

export default SaveResults