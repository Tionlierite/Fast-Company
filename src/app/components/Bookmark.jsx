import React from "react"

export const Bookmark = ({ status, ...rest }) => {
	return (
		<button {...rest}>
			<i className={`bi bi-bookmark${status ? "-check" : ""}`}></i>
		</button>
	)
}
