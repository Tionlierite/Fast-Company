import React from "react"
import { User } from "./User.jsx"

export const UsersTable = ({ users, onSort, currentSort, ...rest }) => {
	const handleSort = item => {
		if (currentSort.iter === item) {
			onSort({ ...currentSort, order: currentSort.order === "asc" ? "desc" : "asc" })
		} else {
			onSort({ iter: item, order: "asc" })
		}
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th
						onClick={() => {
							handleSort("name")
						}}
						scope='col'
					>
						Имя
					</th>
					<th scope='col'>Качества</th>
					<th
						onClick={() => {
							handleSort("professions.name")
						}}
						scope='col'
					>
						Профессия
					</th>
					<th
						onClick={() => {
							handleSort("completedMeetings")
						}}
						scope='col'
					>
						Встретился, раз
					</th>
					<th
						onClick={() => {
							handleSort("rate")
						}}
						scope='col'
					>
						Оценка
					</th>
					<th
						onClick={() => {
							handleSort("bookmark")
						}}
						scope='col'
					>
						Избранное
					</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<User key={user._id} {...user} {...rest} />
				))}
			</tbody>
		</table>
	)
}