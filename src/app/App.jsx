import React from "react"
import { NavBar } from "./components/NavBar.jsx"
import { Route, Switch } from "react-router-dom"
import { Main } from "./layouts/Main.jsx"
import { Login } from "./layouts/Login.jsx"
import { Users } from "./layouts/Users.jsx"

export const App = () => {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path='/' exact component={Main} />
				<Route path='/login' component={Login} />
				<Route path='/users/:userId?' component={Users} />
			</Switch>
		</>
	)
}
