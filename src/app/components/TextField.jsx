import React from "react"

export const TextField = ({ label, type = "text", name, value, error, onChange }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} id={name} value={value} onChange={onChange} name={name} />
			{error && <p>{error}</p>}
		</div>
	)
}
