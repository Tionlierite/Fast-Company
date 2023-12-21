import React, { useEffect, useState } from "react"
import api from "./api/index.js"
import Users from "./components/Users.jsx"

export const App = () => {
	const [users, setUsers] = useState()

	const handleDelete = userId => {
		setUsers(users.filter(user => user._id !== userId))
	}

	const handleFavorite = userId => {
		setUsers(
			users.map(user => {
				if (user._id === userId) {
					return {
						...user,
						bookmark: !user.bookmark
					}
				}
				return user
			})
		)
	}

	useEffect(() => {
		api.users.fetchAll().then(data => setUsers(data))
	}, [])
	return (
		users && (
			<>
				<Users handleDelete={handleDelete} handleFavorite={handleFavorite} users={users} />
			</>
		)
	)
}
