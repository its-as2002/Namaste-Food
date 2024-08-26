import { LOGO_URL } from "../Utils/constants";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={LOGO_URL} alt="wave-logo" />
			</div>
			<div className="nav-bar">
				<ul className="nav-items">
					<li className="nav-item">Home</li>
					<li className="nav-item">About</li>
					<li className="nav-item">Contact Us</li>
					<li className="nav-item">Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
