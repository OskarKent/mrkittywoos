import Menubar from "../../components/Menu/Menubar"
import './Main.css'
import { Link } from "react-router-dom"
import mrkittywoos from "../../assets/mrkittywoos.jpg"

const Main = () => {
  return (
	<div>
		<Menubar />
		<div id="top">
			<img src={mrkittywoos} alt="Mr. Kitty Woos" />
			<h1>Mr. Kitty Woos</h1>
			<h2>Your new overlord</h2>
			<div id="info">
				<p>
					Mr. Kitty Woos is a toy cat living in Toronto. <br />
					He is trying to become the overlord of the universe, <br />
					and is now acquiring the internet with Mrkittywoos.com. <br />
				</p>
			</div>
			<div id="buttons">
				<Link to='/games'>
					<button>Games</button>
				</Link>
				<Link to='/about'>
					<button>More</button>
				</Link>
			</div>
		</div>
	</div>
  )
}

export default Main