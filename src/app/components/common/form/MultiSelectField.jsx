import React from "react"
import Select from "react-select"

const MultiSelectField = ({ options, onChange, name }) => {
	const optionsArray =
		!Array.isArray(options) && typeof options === "object"
			? Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName]._id }))
			: options

	const handleChange = e => {
		onChange(e)
	}
	return (
		<Select
			options={optionsArray}
			isMulti
			className='basic-multi-select'
			classNamePrefix='select'
			onChange={handleChange}
		/>
	)
}

export default MultiSelectField
