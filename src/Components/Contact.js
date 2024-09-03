// src/components/ContactUs.js
import React from 'react';

const Contact = () => {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
				<h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
					Contact Us
				</h1>
				<div className="flex flex-col lg:flex-row lg:space-x-8">
					{/* Contact Form */}
					<div className="lg:w-1/2 mb-8 lg:mb-0">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							Get in Touch
						</h2>
						<form action="#" method="POST" className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-gray-700 font-medium mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm outline-none border-2 px-3 py-2"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-gray-700 font-medium mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="outline-none border-2 px-3 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-gray-700 font-medium mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="6"
									required
									className="w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
							</div>
							<button
								type="submit"
								className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Details */}
					<div className="lg:w-1/2">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">
							Our Contact Details
						</h2>
						<div className="space-y-6">
							<div>
								<p className="text-lg font-medium text-gray-700">Email:</p>
								<a
									href="mailto:contact@yourcompany.com"
									className="text-indigo-600 hover:underline">
									contact@yourcompany.com
								</a>
							</div>
							<div>
								<p className="text-lg font-medium text-gray-700">Phone:</p>
								<a
									href="tel:+1234567890"
									className="text-indigo-600 hover:underline">
									+1 (234) 567-890
								</a>
							</div>
							<div>
								<p className="text-lg font-medium text-gray-700">Address:</p>
								<p className="text-gray-600">
									1234 Main St,
									<br />
									City, State, ZIP
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Optional: Embed Google Map */}
				<div className="mt-12">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us</h3>
					<iframe
						title="Google Maps"
						className="w-full h-64 border-0 rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2111524676267!2d-122.08424948468116!3d37.42199977982529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6b2b3a0729b%3A0x6c8f2d162c06c3!2sGoogleplex!5e0!3m2!1sen!2sus!4v1622573470144!5m2!1sen!2sus"
						loading="lazy"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
