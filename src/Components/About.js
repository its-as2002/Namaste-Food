import UserContext from "../Utils/UserContext";
import { DEVELOPER_IMAGE_URL } from "../Utils/constants";
import { useContext } from "react";

const About = () => {
	const { loggedInUser } = useContext(UserContext);
	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
				<p className="mt-4 text-lg text-gray-600">
					Our mission, story, team, and what we do.
				</p>
			</div>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Our Mission
				</h2>
				<p className="text-lg text-gray-700">
					At [Your Company Name], our mission is to [briefly state your
					company's mission or purpose]. We strive to [mention key goals,
					values, or commitments]. Our dedication to [core values or goals]
					drives us to innovate and excel in everything we do.
				</p>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
				<p className="text-lg text-gray-700">
					Founded in [Year], [Your Company Name] began with a vision to
					[describe the origin or inspiration behind the company]. What started
					as [briefly describe the initial phase, e.g., a small team working
					from a garage] has grown into [describe current state or
					achievements]. Our journey has been marked by [mention significant
					milestones or achievements]. We are proud of [highlight any major
					accomplishments or contributions], and we continue to [describe
					ongoing efforts or future plans].
				</p>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
				<div className="flex flex-wrap -m-4">
					<div className="p-4 w-full md:w-1/3">
						<div className="bg-white shadow-md rounded-lg p-6 text-center">
							<img
								src={DEVELOPER_IMAGE_URL}
								alt="[Team Member Name]"
								className="w-24 h-24 mx-auto rounded-full mb-4"
							/>
							<h3 className="text-xl font-semibold text-gray-800">
								[{loggedInUser}]
							</h3>
							<p className="text-gray-600">[Brief bio or role description]</p>
						</div>
					</div>
					{/* Repeat the above block for each team member */}
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Our Values
				</h2>
				<ul className="list-disc pl-5 space-y-3">
					<li className="text-lg text-gray-700">
						<strong>[Value 1]</strong>: [Description of the value]
					</li>
					<li className="text-lg text-gray-700">
						<strong>[Value 2]</strong>: [Description of the value]
					</li>
					<li className="text-lg text-gray-700">
						<strong>[Value 3]</strong>: [Description of the value]
					</li>
				</ul>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					What We Do
				</h2>
				<p className="text-lg text-gray-700">
					At [Your Company Name], we specialize in [describe your products,
					services, or main activities]. Our [products/services] are designed to
					[briefly explain the benefits or impact of your offerings]. We are
					committed to [mention any customer or industry commitments].
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Contact Us
				</h2>
				<div className="text-lg text-gray-700">
					<p>Email: [Your email address]</p>
					<p>Phone: [Your phone number]</p>
					<p>Address: [Your office address]</p>
					<p>Social Media: [Links to your social media profiles]</p>
				</div>
			</section>
		</div>
	);
};

export default About;
