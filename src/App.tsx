import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { NotFound } from './components/NotFound'
import "./index.scss"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Dashboard}></Route>
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
