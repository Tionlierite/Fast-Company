import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator.js"
import { TextField } from "../common/form/TextField.jsx"
import CheckboxField from "../common/form/CheckboxField.jsx"

export const LoginForm = () => {
	const [data, setData] = useState({ email: "", password: "", stayOn: false })
	const [errors, setErrors] = useState({})
	const isValid = Object.keys(errors).length === 0
	const validatorConfig = {
		email: {
			isRequired: { message: "Электронная почта обязательна для заполнения" },
			isEmail: { message: "Электронная почта введена некорректно" }
		},
		password: {
			isRequired: { message: "Пароль обязателен для заполнения" },
			isCapitalSymbol: { message: "Пароль должен содержать хотя бы одну заглавную букву" },
			isContainDigit: { message: "Пароль должен содержать хотя бы одну цифру" },
			min: { message: "Пароль должен состоять минимум из 8 символов", value: 8 }
		}
	}

	const handleChange = target => {
		setData(prevState => ({ ...prevState, [target.name]: target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
		console.log(data)
	}
	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	useEffect(() => {
		validate()
	}, [data])

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label='Электронная почта'
				name='email'
				value={data.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				label='Пароль'
				type='password'
				name='password'
				value={data.password}
				onChange={handleChange}
				error={errors.password}
			/>
			<CheckboxField value={data.stayOn} onChange={handleChange} name='stayOn'>
				Оставаться в системе
			</CheckboxField>
			<button type='submit' disabled={!isValid} className='btn btn-primary w-100 mx-auto mb-2'>
				submit
			</button>
		</form>
	)
}
