import { useState } from 'react'
import API from '../api'

const Users = () => {
	const [users, setUsers] = useState(API.users.fetchAll)

	const getPhraseClasses = () => {
		let classes = 'badge bg-'
		classes += users.length === 0 ? 'danger' : 'primary'
		return classes
	}

	const formatPhrase = numberOfPeopleInObject => {
		let phrase = ''
		const lastNumber = Number(numberOfPeopleInObject.toString().slice(-1))

		if (lastNumber === 1) phrase = 'человек тусанет'
		if ([2, 3, 4].indexOf(lastNumber) >= 0) phrase = 'человека тусанет'
		if (numberOfPeopleInObject >= 5 && numberOfPeopleInObject <= 14)
			phrase = 'человек тусанет'

		if (phrase)
			return numberOfPeopleInObject + ' ' + phrase + ' с тобой сегодня'
		return 'Никто с тобой не тусанет'
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

	const handleDeleteUser = userIDToDelete => {
		setUsers(prevState => prevState.filter(user => user._id !== userIDToDelete))
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
						onClick={() => handleDeleteUser(user._id)}
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
				<span className={getPhraseClasses()}>{formatPhrase(users.length)}</span>
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
