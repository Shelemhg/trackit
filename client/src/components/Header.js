import logo from '../assets/images/logo2.png';


export default function Header(){
	return (
		<nav className="nav-bar">
			<a href="/">
            <img src={logo} alt="logo"></img>
            </a>

            {/* Another way to add an external element is to require it */}
            {/* <img src={require('../assets/images/logo2.png')} alt="logo"></img> */}
			
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
		</nav>
	)
}