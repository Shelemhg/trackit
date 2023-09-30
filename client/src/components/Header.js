import logo from '../assets/images/logo2.png';


export default function Header(){
	return (
		<nav className="nav-bar">
			<img src={logo} alt="logo"></img>

            {/* Another way to add an external element is to require it */}
            {/* <img src={require('../assets/images/logo2.png')} alt="logo"></img> */}
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
			</ul>
		</nav>
	)
}