import React from 'react'
import reactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

const element = <h1>Hello World</h1>

const Component = () => {
	return element
}

reactDOM.render(<Component />, document.querySelector('#root'))