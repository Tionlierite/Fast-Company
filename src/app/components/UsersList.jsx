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

const UsersList = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [professions, setProfessions] = useState()
	const [selectedProfession, setSelectedProfession] = useState()
	const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
	const [users, setUsers] = useState()
	const [searchQuery, setSearchQuery] = useState("")
	const pageSize = 8

	const handleDelete = userId => {
		setUsers(users.filter(user => user._id !== userId))
	}

	const handleToggleBookmark = userId => {
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

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	const handleProfessionSelect = item => {
		setSelectedProfession(item)
		if (searchQuery !== "") setSearchQuery("")
		setCurrentPage(1)
	}

	const handleSort = item => {
		setSortBy(item)
	}

	const handleSearchQuery = ({ target }) => {
		setSearchQuery(target.value)
		setSelectedProfession(undefined)
	}

	const clearFilter = () => {
		setSelectedProfession(undefined)
	}

	useEffect(() => {
		api.professions.fetchAll().then(data => setProfessions(data))
		api.users.fetchAll().then(data => setUsers(data))
	}, [])

	if (users) {
		let filteredUsers = searchQuery
			? users.filter(user => user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) // .includes
			: selectedProfession
			? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProfession))
			: users

		const usersCount = filteredUsers.length
		const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
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
					<input
						type='text'
						name='searchQuery'
						placeholder='Search...'
						value={searchQuery}
						onChange={handleSearchQuery}
					/>
					{usersCount > 0 && (
						<UsersTable
							users={userCrop}
							onSort={handleSort}
							selectedSort={sortBy}
							onDelete={handleDelete}
							onToggleBookmark={handleToggleBookmark}
						/>
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
	return <h6>Loading...</h6>
}

export default UsersList
