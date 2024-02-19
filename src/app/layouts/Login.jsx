<<<<<<< HEAD
import React, { useState } from "react"

export const Login = () => {
	const [data, setData] = useState({ email: "", password: "" })

	const handleChange = ({ target }) => {
		setData(prevState => ({ ...prevState, [target.name]: target.value }))
	}

	return (
		<form action=''>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' value={data.email} onChange={handleChange} name='email' />
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' value={data.password} onChange={handleChange} name='password' />
			</div>
		</form>
	)
=======
import React from "react"

export const Login = () => {
	return <h1>Login</h1>
>>>>>>> 3df53f6059206546ba54e060a92d6113554ef670
}
