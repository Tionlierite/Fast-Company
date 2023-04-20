import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

import Users from '../src/components/users'

const rootElement = document.querySelector('#root')
const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<Users />
	</StrictMode>
)
