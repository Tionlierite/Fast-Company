import React from "react"

export const TableHeader = ({ onSort, selectedSort, columns }) => {
	const handleSort = item => {
		if (selectedSort.path === item) {
			onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" })
		} else {
			onSort({ path: item, order: "asc" })
		}
	}

	const showOrderIcon = item => {
		if (selectedSort.path === item) {
			return selectedSort.order === "asc" ? "up" : "down"
		}
	}

	return (
		<thead>
			<tr>
				{Object.keys(columns).map(column => (
					<th
						key={column}
						onClick={() => {
							columns[column].path ? handleSort(columns[column].path) : undefined
						}}
						{...{ role: columns[column].path && "button" }}
						scope='col'
					>
						{columns[column].name}
						<i className={`bi bi-caret-${showOrderIcon(columns[column].path)}-fill`}></i>
					</th>
				))}
			</tr>
		</thead>
	)
}
