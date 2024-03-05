import React from "react"
import { Quality } from "./Quality.jsx"

const QualitiesList = ({ qualities }) => {
	return (
		<>
			{qualities.map(quality => (
				<Quality key={quality._id} {...quality} />
			))}
		</>
	)
}

export default QualitiesList
