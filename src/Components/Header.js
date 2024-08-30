import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { useOnlineStatus } from "../Utils/custom-hooks";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
	return (
		<div className="header">
			<div className="logo">
				<img id="logo-img" src={LOGO_URL} alt="wave-logo" />
			</div>
			<div className="nav-bar">
				<ul className="nav-items">
					<li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/about">About</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="nav-item">Cart</li>
					<li className="nav-item">
						<button
							className="Login-Logout-btn"
							onClick={() => {
								btnName === "Login"
									? setBtnName("Logout")
									: setBtnName("Login");
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
