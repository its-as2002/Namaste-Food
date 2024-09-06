import { Link } from "react-router-dom";
const EmptyCart = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
			<p className="text-lg text-gray-500 mb-8">
				Add some items to your cart to get started!
			</p>
			<button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
				<Link to="/">Go to Home</Link>
			</button>
		</div>
	);
};

export default EmptyCart;
