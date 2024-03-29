import React from "react"

const TableHeader = ({ onSort, selectedSort, columns }) => {
	const handleSort = item => {
		if (selectedSort.path === item) {
			onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" })
		} else {
			onSort({ path: item, order: "asc" })
		}
	}

	const renderSortArrow = (selectedSort, currentPath) => {
		if (selectedSort.path === currentPath) {
			return selectedSort.order === "asc" ? "down" : "up"
		}
		return null
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
						<i className={`bi bi-caret-${renderSortArrow(selectedSort, columns[column].path)}-fill`}></i>
					</th>
				))}
			</tr>
		</thead>
	)
}

export default TableHeader
