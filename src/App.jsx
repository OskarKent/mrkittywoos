import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Main from './pages/Main/Main';
import Games from './pages/Games/Games';
import About from './pages/About/About';

const App = () => {
  return (
	<Router>
		<Routes>
			<Route exact path='/' Component={Main}></Route>
			<Route exact path='/games' Component={Games}></Route>
			<Route exact path='/about' Component={About}></Route>
		</Routes>
	</Router>
  )
}

export default App