import React from "react"
import TableHeader from "./TableHeader.jsx"
import TableBody from "./TableBody.jsx"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
	return (
		<table className='table'>
			{children || (
				<>
					<TableHeader {...{ onSort, selectedSort, columns }} />
					<TableBody {...{ columns, data }} />
				</>
			)}
		</table>
	)
}

export default Table
