import React from "react"
import { useParams } from "react-router-dom"
import UserPage from "../components/page/userPage/index.js"
import UsersListPage from "../components/page/usersListPage/index.js"

export const Users = () => {
	const params = useParams()
	const { userId } = params

	return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>
}
