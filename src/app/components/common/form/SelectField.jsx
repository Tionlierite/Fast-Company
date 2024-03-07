import React from "react"

const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
	const getInputClasses = () => {
		return "form-select" + (error ? " is-invalid" : "")
	}

	const handleChange = ({ target }) => {
		onChange({ name:target.name, value:target.value })
	}

	const optionsArray =
		!Array.isArray(options) && typeof options === "object"
			? Object.keys(options).map(optionName => ({ name: options[optionName].name, value: options[optionName]._id }))
			: options

	return (
		<div className='mb-4'>
			<label htmlFor='validationCustom04' className='form-label'>
				{label}
			</label>
			<select className={getInputClasses()} id='validationCustom04' value={value} onChange={handleChange} name='profession'>
				<option disabled value=''>
					{defaultOption}
				</option>
				{optionsArray &&
					optionsArray.map(option => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
			</select>
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	)
}

export default SelectField