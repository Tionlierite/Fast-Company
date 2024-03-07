import React from "react"
import Select from "react-select"

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
	const optionsArray =
		!Array.isArray(options) && typeof options === "object"
			? Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName]._id }))
			: options

	const handleChange = value => {
		onChange({ name: name, value })
	}
	return (
		<div className='mb-4'>
			<label className='form-label'>{label}</label>
			<Select
				options={optionsArray}
				closeMenuOnSelect={false}
				defaultValue={defaultValue}
				isMulti
				className='basic-multi-select'
				classNamePrefix='select'
				onChange={handleChange}
			/>
		</div>
	)
}

export default MultiSelectField
