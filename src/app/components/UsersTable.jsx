import React from "react"
import { Bookmark } from "./Bookmark.jsx"
import { QualitiesList } from "./QualitiesList.jsx"
import { Table } from "./Table.jsx"

export const UsersTable = ({ users, onSort, selectedSort, onToggleBookmark, onDelete }) => {
	const columns = {
		name: { path: "name", name: "Имя" },
		qualities: { name: "Качество", component: user => <QualitiesList qualities={user.qualities} /> },
		professions: { path: "profession.name", name: "Профессия" },
		completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
		rate: { path: "rate", name: "Оценка" },
		bookmark: {
			path: "bookmark",
			name: "Избранное",
			component: user => (
				<Bookmark
					status={user.bookmark}
					onClick={() => {
						onToggleBookmark(user._id)
					}}
				/>
			)
		},
		delete: {
			component: user => (
				<button onClick={() => onDelete(user._id)} className='btn btn-danger'>
					delete
				</button>
			)
		}
	}

	return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />
}
