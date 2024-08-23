import React from "react";
import ReactDOM from "react-dom";

const Headers = () => {
	return (
		<div className="header">
			<div className="logo">
				<img
					src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
					alt="wave-logo"
				/>
			</div>
			<div className="nav-bar">
				<ul className="nav-items">
					<li className="nav-item">Home</li>
					<li className="nav-item">About</li>
					<li className="nav-item">Contact</li>
					<li className="nav-item">Help</li>
				</ul>
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<div className="mid-body">
			<div className="search">
				<input type="search" placeholder="Search" className="search-input" />
				<i class="ri-search-2-line"></i>
			</div>
			<div className="card-container">
				<div className="card">
					<img
						src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jbmrskzaup8jv9iiwexa"
						alt="food"
					/>
					<div className="content">
						<h3>Meghna Pizza</h3>
						<h4>Italian, Pizza</h4>
						<h4>4.4</h4>
						<h4>38 minutes</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
const AppLayout = () => {
	return (
		<div>
			<Headers />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
