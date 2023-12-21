import React, { useState } from "react"
// Components
import { User } from "./User.jsx"
import { Pagination } from "./Pagination.jsx"
import { paginate } from "../utils/paginate.js"

const Users = ({ users, ...rest }) => {
	const usersCount = users.length
	const pageSize = 4
	const [currentPage, setCurrentPage] = useState(1)

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const userCrop = paginate(users, currentPage, pageSize)

	return (
		<>
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
						{userCrop.map(user => (
							<User key={user._id} {...user} {...rest} />
						))}
					</tbody>
				</table>
			)}
			<Pagination
				itemsCount={usersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</>
	)
}

export default Users
