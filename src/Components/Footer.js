// src/Footer.js
import React from "react";

const Footer = () => {
	return (
		<footer className=" bg-gray-800 text-white py-6">
			<div className="container mx-auto text-center">
				<p className="mb-4">
					© {new Date().getFullYear()} Your Company. All rights reserved.
				</p>
				<div className="flex justify-center space-x-6">
					<a href="#" className="hover:text-gray-400">
						Privacy Policy
					</a>
					<a href="#" className="hover:text-gray-400">
						Terms of Service
					</a>
					<a href="#" className="hover:text-gray-400">
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
