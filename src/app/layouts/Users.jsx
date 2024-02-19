import React from "react"
import { useParams } from "react-router-dom"
import { UserPage } from "../components/UserPage.jsx"
import UsersList from "../components/UsersList.jsx"

export const Users = () => {
	const params = useParams()
	const { userId } = params

	return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>
}
