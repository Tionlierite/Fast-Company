import React from "react"
import { Qualitie } from "./Qualitie.jsx"
import { Bookmark } from "./Bookmark.jsx"

export const User = ({ _id, name, profession, qualities, completedMeetings, rate, handleDelete, ...rest }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>
				{qualities.map(item => (
					<Qualitie key={item._id} {...item} />
				))}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate} /5</td>
			<td>
				<Bookmark userId={_id} {...rest} />
			</td>
			<td>
				<button onClick={() => handleDelete(_id)} className='btn btn-danger'>
					delete
				</button>
			</td>
		</tr>
	)
}
