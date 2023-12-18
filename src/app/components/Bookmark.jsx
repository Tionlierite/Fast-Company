import React from "react"

export const Bookmark = ({ userId, bookmark, handleFavorite }) => {
	return bookmark ? (
		<button
			onClick={() => {
				handleFavorite(userId)
			}}
		>
			<i className='bi bi-bookmark-check'></i>
		</button>
	) : (
		<button
			onClick={() => {
				handleFavorite(userId)
			}}
		>
			<i className='bi bi-bookmark'></i>
		</button>
	)
}
