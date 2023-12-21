import React, { useEffect, useState } from "react"
// Components
import { User } from "./User.jsx"
import { Pagination } from "./Pagination.jsx"
import { GroupList } from "./GroupList.jsx"
import { SearchStatus } from "./SearchStatus.jsx"
// Utils
import { paginate } from "../utils/paginate.js"
import api from "../api/index.js"

const Users = ({ users, ...rest }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfessions] = useState()
	const [selectedProfession, setSelectedProfession] = useState()
	const pageSize = 2

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const handleProfessionSelect = item => {
		setSelectedProfession(item)
		setCurrentPage(1)
	}

	const clearFilter = () => {
		setSelectedProfession(undefined)
	}

	useEffect(() => {
		api.professions.fetchAll().then(data => setProfessions(data))
	}, [])

	const filteredUsers = selectedProfession
		? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProfession))
		: users
	const usersCount = filteredUsers.length
	const userCrop = paginate(filteredUsers, currentPage, pageSize)

	return (
		<div className='d-flex'>
			{professions && (
				<div className='d-flex flex-column flex-shrink-0 p-3'>
					<GroupList items={professions} onItemSelect={handleProfessionSelect} selectedItem={selectedProfession} />
					<button className='btn btn-secondary mt-2' onClick={clearFilter}>
						Очистить
					</button>
				</div>
			)}
			<div className='d-flex flex-column'>
				<SearchStatus length={usersCount} />
				{usersCount > 0 && (
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
				<div className='d-flex justify-content-center'>
					<Pagination
						itemsCount={usersCount}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Users
