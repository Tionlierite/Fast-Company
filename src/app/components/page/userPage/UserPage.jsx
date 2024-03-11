import React, { useEffect, useState } from "react"
import api from "../../../api/index.js"
import Qualities from "../../ui/qualities"
import { useHistory } from "react-router-dom"

const UserPage = ({ userId }) => {
	const [user, setUser] = useState()
	const history = useHistory()

	useEffect(() => {
		api.users.getById(userId).then(data => setUser(data))
	}, [])

	const handleClick = () => {
		history.push(`${userId}/edit`)
	}

	if (user) {
		return (
			<div>
				<h1>{user.name}</h1>
				<h2>Профессия: {user.profession.name}</h2>
				<Qualities qualities={user.qualities} />
				<p>completedMeetings: {user.completedMeetings}</p>
				<h2>Rate: {user.rate}</h2>
				<button onClick={handleClick}>Изменить</button>
			</div>
		)
	}
	return <h6>Loading...</h6>
}

export default UserPage
