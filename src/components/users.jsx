import { useState } from 'react'
import API from '../api'

const Users = () => {
	const [users, setUsers] = useState(API.users.fetchAll)

	const getPhraseClasses = () => {
		let classes = 'badge bg-'
		classes += users.length === 0 ? 'danger' : 'primary'
		return classes
	}

	const formatPhrase = () => {
		return users.length === 0
			? `Никто с тобой не тусанет`
			: `${users.length} человек тусанет с тобой сегодня`
	}

	const getBadgeClasses = quality => {
		return 'badge m-2 bg-' + quality.color
	}

	const getQualities = userQualities => {
		return userQualities.map(quality => (
			<span key={quality._id} className={getBadgeClasses(quality)}>
				{quality.name}
			</span>
		))
	}

	const getProfession = userProfession => {
		return userProfession.name
	}

	const getRating = userRating => {
		return userRating + '/5'
	}

	const handleDeleteUser = userToDelete => {
		setUsers(prevState => prevState.filter(user => user !== userToDelete))
	}

	const getTableRows = () => {
		return users.map(user => (
			<tr key={user._id}>
				<td>{user.name}</td>
				<td>{getQualities(user.qualities)}</td>
				<td>{getProfession(user.profession)}</td>
				<td>{user.completedMeetings}</td>
				<td>{getRating(user.rate)}</td>
				<td>
					<button
						className='btn bg-danger btn-sm m-2 text-light'
						onClick={() => handleDeleteUser(user)}
					>
						Удалить
					</button>
				</td>
			</tr>
		))
	}

	const renderPhrase = () => {
		return (
			<h2>
				<span className={getPhraseClasses()}>{formatPhrase()}</span>
			</h2>
		)
	}

	const renderTableOfUsers = () => {
		return (
			<>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Имя</th>
							<th scope='col'>Качества</th>
							<th scope='col'>Профессия</th>
							<th scope='col'>Встретился, раз</th>
							<th scope='col'>Оценка</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>{getTableRows()}</tbody>
				</table>
			</>
		)
	}

	if (users.length !== 0) {
		return (
			<>
				{renderPhrase()}
				{renderTableOfUsers()}
			</>
		)
	}
	return <>{renderPhrase()}</>
}

export default Users
