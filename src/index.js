import React from 'react'
import reactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Counter from "./Components/counter";

const App = () => {
	return <Counter/>
}

reactDOM.render(<App />, document.querySelector('#root'))