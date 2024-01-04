import React from "react"
import { Quality } from "./Quality.jsx"
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
				{qualities.map(quality => (
					<Quality key={quality._id} {...quality} />
				))}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate} /5</td>
			<td></td>
			<td></td>
		</tr>
	)
}
