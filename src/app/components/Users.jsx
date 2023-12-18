import React, { useState } from "react"
import api from "../api"
// Components
import { SearchStatus } from "./SearchStatus.jsx"
import { User } from "./User.jsx"

const Users = () => {
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
			<SearchStatus users={users} />

			{users.length > 0 && (
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Имя</th>
							<th scope='col'>Качества</th>
							<th scope='col'>Профессия</th>
							<th scope='col'>Встретился, раз</th>
							<th scope='col'>Оценка</th>
							<th scope='col'>Избранное</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{users.map(user => (
							<User key={user._id} {...user} handleDelete={handleDelete} handleFavorite={handleFavorite} />
						))}
					</tbody>
				</table>
			)}
		</>
	)
}

export default Users
