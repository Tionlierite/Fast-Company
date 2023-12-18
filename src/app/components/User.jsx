import React from "react"
import { Qualitie } from "./Qualitie.jsx"
import { Bookmark } from "./Bookmark.jsx"

export const User = ({
	_id,
	name,
	profession,
	qualities,
	completedMeetings,
	rate,
	bookmark,
	handleDelete,
	handleFavorite
}) => {
	return (
		<tr>
			<td>{name}</td>
			<td>
				{qualities.map(qualitie => (
					<Qualitie key={qualitie._id} {...qualitie} />
				))}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate} /5</td>
			<td>
				<Bookmark
					status={bookmark}
					onClick={() => {
						handleFavorite(_id)
					}}
				/>
			</td>
			<td>
				<button onClick={() => handleDelete(_id)} className='btn btn-danger'>
					delete
				</button>
			</td>
		</tr>
	)
}
