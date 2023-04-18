import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	const formatCount = () => {
		return count === 0 ? 'empty' : count
	}

	const getBadgeClasses = () => {
		let classes = 'badge m-2 '
		classes += count === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	const handleClickIncrement = () => {
		setCount(prevState => prevState + 1)
	}
	const handleClickDecrement = () => {
		setCount(prevState => prevState - 1)
	}

	return (
		<>
			<span className={getBadgeClasses()}>{formatCount()}</span>
			<button
				className='btn bg-primary btn-sm m-2'
				onClick={handleClickIncrement}
			>
				+
			</button>
			<button
				className='btn bg-primary btn-sm m-2'
				onClick={handleClickDecrement}
			>
				-
			</button>
		</>
	)
}

export default Counter
