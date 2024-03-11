import React from "react"
import { useParams } from "react-router-dom"
import UserPage from "../components/page/userPage/index.js"
import UsersListPage from "../components/page/usersListPage/index.js"
import EditUserPage from "../components/page/editUserPage/index.js"

export const Users = () => {
	const params = useParams()
	const { userId, edit } = params

	return <>{userId ? edit ? <EditUserPage /> : <UserPage userId={userId} /> : <UsersListPage />}</>
}
