import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";


const Header = () => {
	const [btnName, setBtnName] = useState("Login");
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
					<li className="nav-item">
						<button className="Login-Logout-btn" onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
						}}>
							{btnName}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
