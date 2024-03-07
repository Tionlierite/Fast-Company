import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator.js"
import { TextField } from "../common/form/TextField.jsx"
import api from "../../api/index.js"
import SelectField from "../common/form/SelectField.jsx"
import RadioField from "../common/form/RadioField.jsx"
import MultiSelectField from "../common/form/MultiSelectField.jsx"
import CheckboxField from "../common/form/CheckboxField.jsx"

export const RegisterForm = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
		profession: "",
		sex: "male",
		qualities: [],
		license: false
	})
	const [qualities, setQualities] = useState()
	const [professions, setProfessions] = useState()
	const [errors, setErrors] = useState({})
	useEffect(() => {
		api.professions.fetchAll().then(data => setProfessions(data))
		api.qualities.fetchAll().then(data => setQualities(data))
	}, [])

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
		},
		profession: {
			isRequired: {
				message: "Обязательно выберите вашу профессию"
			}
		},
		license: {
			isRequired: {
				message: "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
			}
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
			<SelectField
				defaultOption='Выбрать...'
				options={professions}
				onChange={handleChange}
				value={data.profession}
				error={errors.profession}
				label='Выберите вашу профессию'
			/>
			<RadioField
				options={[
					{ name: "Male", value: "male" },
					{ name: "Female", value: "female" },
					{ name: "Other", value: "other" }
				]}
				value={data.sex}
				name='sex'
				onChange={handleChange}
				label='Выберите ваш пол'
			/>
			<MultiSelectField options={qualities} onChange={handleChange} name='qualities' label='Выберите ваши качества' />
			<CheckboxField value={data.license} onChange={handleChange} name='license' error={errors.license}>
				Подтвердить <a>лицензионное соглашение</a>
			</CheckboxField>
			<button type='submit' disabled={!isValid} className='btn btn-primary w-100 mx-auto mb-2'>
				submit
			</button>
		</form>
	)
}
