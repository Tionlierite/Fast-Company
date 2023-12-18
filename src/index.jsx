import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"

import { App } from "./app/App.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)