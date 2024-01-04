import React from "react"
import { User } from "./User.jsx"
import { TableHeader } from "./TableHeader.jsx"

export const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
	const columns = {
		name: { iter: "name", name: "Имя" },
		qualities: { name: "Качество" },
		professions: { iter: "profession.name", name: "Профессия" },
		completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
		rate: { iter: "rate", name: "Оценка" },
		bookmark: { iter: "bookmark", name: "Избранное" },
		delete: {}
	}

	return (
		<table className='table'>
			<TableHeader {...{ onSort, selectedSort, columns }} />
			<tbody>
				{users.map(user => (
					<User key={user._id} {...user} {...rest} />
				))}
			</tbody>
		</table>
	)
}
