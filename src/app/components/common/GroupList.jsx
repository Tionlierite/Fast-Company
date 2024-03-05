import React from "react"

export const GroupList = ({ items, valueProperty = "_id", contentProperty = "name", selectedItem, onItemSelect }) => {
	return (
		<ul className='list-group'>
			{Object.keys(items).map(item => (
				<li
					className={
						"list-group-item" + (JSON.stringify(items[item]) === JSON.stringify(selectedItem) ? " active" : "")
					}
					key={items[item][valueProperty]}
					onClick={() => {
						onItemSelect(items[item])
					}}
					role='button'
				>
					{items[item][contentProperty]}
				</li>
			))}
		</ul>
	)
}
