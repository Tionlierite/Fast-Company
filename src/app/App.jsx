import React, { useState } from "react"
import api from "./api/index.js"
import { SearchStatus } from "./components/SearchStatus.jsx"
import Users from "./components/Users.jsx"

export const App = () => {
	const [users, setUsers] = useState(api.users.fetchAll())

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
	return (
		<>
			<SearchStatus length={users.length} />
			<Users handleDelete={handleDelete} handleFavorite={handleFavorite} users={users} />
		</>
	)
}
