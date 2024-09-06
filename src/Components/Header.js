import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { useContext, useState } from "react";
import { useOnlineStatus } from "../Utils/custom-hooks";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);
	const [userInHeader, setUserInHeader] = useState(false); ///for nae in header example of useContext
	const cartItems = useSelector((state) => state.cart.items);
	return (
		<div className="p-4 w-full flex justify-between items-center shadow-xl sticky top-0 bg-white z-50">
			<div className="logo">
				<img
					className="w-20 rounded-full border-2 border-cyan-500/50"
					id="logo-img"
					src={LOGO_URL}
					alt="wave-logo"
				/>
			</div>
			<div className="nav-bar">
				<ul className="flex gap-4 ">
					<li className="p-1.5 rounded-lg font-semibold">
						Online Status: {onlineStatus ? "🟢" : "🔴"}
					</li>
					<li className="text-black bg-transparent hover:text-white hover:bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300">
						<Link to="/">Home</Link>
					</li>

					<li className="text-black bg-transparent hover:text-white hover:bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300">
						<Link to="/about">About</Link>
					</li>
					<li className="text-black bg-transparent hover:text-white hover:bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="text-black bg-transparent hover:text-white hover:bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="text-black bg-transparent hover:text-white hover:bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300">
						<Link to="/cart">Cart : {cartItems.length}</Link>
					</li>
					{userInHeader && (
						<li className="text-sm px-5 py-2.5 text-center me-2 mb-2">
							{loggedInUser}
						</li>
					)}
					<li>
						<button
							type="button"
							className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
							onClick={() => {
								btnName === "Login"
									? setBtnName("Logout")
									: setBtnName("Login");
								if (btnName === "Login") setUserInHeader(true);
								else setUserInHeader(false);
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
