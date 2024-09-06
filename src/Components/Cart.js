import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items);

	return !cartItems.length ? (
		<EmptyCart />
	) : (
		<div className="flex items-center justify-center w-full">
			<div className="flex flex-col items-center justify-center w-full border-2 px-8">
				<h1 className="my-4 text-lg font-bold w-[50%] text-center border-4">
					Cart
				</h1>
				{cartItems.map((item) => (
					<CartItem item={item} key={item.card.info.id} />
				))}
				<div className="flex justify-center w-full">
					<button className="bg-gray-800 text-white px-4 py-2 my-4">
						<Link to="/checkout">Checkout</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
