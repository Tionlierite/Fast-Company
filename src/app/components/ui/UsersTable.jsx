import React from "react"
import { Bookmark } from "../common/Bookmark.jsx"
import Qualities from "./qualities/index.js"
import { Link } from "react-router-dom"
import { Table } from "../common/table/index.js"

export const UsersTable = ({ users, onSort, selectedSort, onToggleBookmark, onDelete }) => {
	const columns = {
		name: { path: "name", name: "Имя", component: user => <Link to={`/users/${user._id}`}>{user.name}</Link> },
		qualities: { name: "Качество", component: user => <Qualities qualities={user.qualities} /> },
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
