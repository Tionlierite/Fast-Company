import React from "react"

export const Qualitie = ({ _id, color, name }) => {
	return (
		<span className={"badge m-1 bg-" + color} key={_id}>
			{name}
		</span>
	)
}
