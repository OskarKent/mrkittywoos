import Menubar from '../../components/Menu/Menubar'
import './About.css'

const About = () => {
  return (
	<div>
		<Menubar />
		<div id="about">
			<h1>About Mr. Kitty Woos</h1>
			<p>
				Mr. Kitty Woos is a toy cat living in Toronto. <br />
				He is trying to become the overlord of the universe, <br />
				and is now acquiring the internet with Mrkittywoos.com. <br /> <br />

				Mrkittywoos.com is a website with many different games, <br />
				which are currently still in progress, and will release later this year.
			</p>
		</div>
		<p>Font: <a href="https://fonts.google.com/specimen/Quicksand" target="_blank">Quicksand</a> by Andrew Paglinawan</p>
		<p>Made with <a href="https://vitejs.dev" rel='nofollow' target="_blank">Vite.js</a> and <a href='https://reactjs.org' rel='nofollow' target='_blank'>React.js</a></p>
		<p>All images and character content © 2026 Kitty Woos Studios™. All rights reserved.</p>
	</div>
  )
}

export default About