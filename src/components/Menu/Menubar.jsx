import { Link } from 'react-router-dom'
import './Menubar.css'

const Menubar = () => {
  return (
	<nav id='menu'>
		<Link to='/'>
			<img src="src/assets/favicon.ico" alt="Home" />
		</Link>
		<Link to='/'>
			<p>Home</p>
		</Link>
		<Link to='/games'>
			<p>Games</p>
		</Link>
		<Link to='/about'>
			<p>About</p>
		</Link>
	</nav>
  )
}

export default Menubar