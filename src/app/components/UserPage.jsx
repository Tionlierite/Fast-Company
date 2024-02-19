import React, { useEffect, useState } from "react"
import api from "../api/index.js"
import { QualitiesList } from "./QualitiesList.jsx"
import { useHistory } from "react-router-dom"

export const UserPage = ({ userId }) => {
	const [user, setUser] = useState()
	const history = useHistory()

	useEffect(() => {
		api.users.getById(userId).then(data => setUser(data))
	}, [])

	const handleClick = () => {
		history.push("/")
	}

	if (user) {
		return (
<<<<<<< HEAD
			<div>
				<h1>{user.name}</h1>
				<h2>Профессия: {user.profession.name}</h2>
=======
			<>
				<h1>{user.name}</h1>
				<h2>{user.profession.name}</h2>
>>>>>>> 3df53f6059206546ba54e060a92d6113554ef670
				<QualitiesList qualities={user.qualities} />
				<p>completedMeetings: {user.completedMeetings}</p>
				<h2>Rate: {user.rate}</h2>
				<button onClick={handleClick}>Все Пользователи</button>
<<<<<<< HEAD
			</div>
=======
			</>
>>>>>>> 3df53f6059206546ba54e060a92d6113554ef670
		)
	}
	return <h6>Loading...</h6>
}
