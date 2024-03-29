import React, { useState } from "react"

export const TextField = ({ label, type = "text", name, value, error, onChange }) => {
	const [showPassword, setShowPassword] = useState(false)
	const getInputClasses = () => {
		return "form-control" + (error ? " is-invalid" : "")
	}
	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState)
	}
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	return (
		<div className='mb-4'>
			<label htmlFor={name}>{label}</label>
			<div className='input-group has-validation'>
				<input
					type={showPassword ? "text" : type}
					id={name}
					value={value}
					onChange={handleChange}
					name={name}
					className={getInputClasses()}
				/>
				{type === "password" && (
					<button className='btn btn-outline-secondary' type='button' onClick={toggleShowPassword}>
						<i className={`bi bi-${showPassword ? "eye-slash" : "eye"}`}></i>
					</button>
				)}
				{error && <div className='invalid-feedback'>{error}</div>}
			</div>
		</div>
	)
}
