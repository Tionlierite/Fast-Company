import { useState } from 'react'
import API from '../api'

const Users = () => {
	const [users, setUsers] = useState(API.users.fetchAll)

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

	const handleDeleteUser = id => {
		setUsers(prevState => prevState.filter(user => user !== id))
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

	if (users.length === 0) {
		return
	}

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

export default Users
