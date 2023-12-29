import React, { useEffect, useState } from "react"
// Components
import { Pagination } from "./Pagination.jsx"
import { GroupList } from "./GroupList.jsx"
import { SearchStatus } from "./SearchStatus.jsx"
import { UsersTable } from "./UsersTable.jsx"
// Utils
import { paginate } from "../utils/paginate.js"
import api from "../api/index.js"
import _ from "lodash"

const Users = ({ users, ...rest }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfessions] = useState()
	const [selectedProfession, setSelectedProfession] = useState()
	const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })
	const pageSize = 8

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const handleProfessionSelect = item => {
		setSelectedProfession(item)
		setCurrentPage(1)
	}
	const handleSort = item => {
		setSortBy(item)
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
	const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])
	const userCrop = paginate(sortedUsers, currentPage, pageSize)

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
				{usersCount > 0 && <UsersTable users={userCrop} onSort={handleSort} currentSort={sortBy} {...rest} />}
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
