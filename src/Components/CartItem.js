import { useState } from "react";
import { RES_IMG_URL, STAR_ICON } from "../Utils/constants";
import { IMG_VEG, IMG_NONVEG } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/SliceStore/cartSlice";
import { useSelector } from "react-redux";
const CartItem = (props) => {
	const { item } = props;
	const {
		name,
		price,
		ratings,
		description,
		imageId,
		isVeg,
		isBestseller,
		defaultPrice,
	} = item.card.info;
	const { aggregatedRating } = ratings;
	const { rating, ratingCount } = aggregatedRating;
	const quantity = useSelector((state) => state.cart.dic[item.card.info.id]);
	const dispatch = useDispatch();
	const handleIncrementQty = () => {
		dispatch(addItem(item));
	};
	const handleDecrementQty = () => {
		dispatch(removeItem(item));
	};

	return (
		<div className="flex gap-8 items-start justify-between mx-auto p-8 rounded-2xl bg-slate-200 my-4 w-[50%]">
			<div className="w-[70%] flex flex-col justify-between">
				<div className="flex gap-2 items-center mb-2">
					{isVeg ? (
						<img
							width="20"
							height="20"
							src={IMG_VEG}
							alt="vegetarian-food-symbol"
						/>
					) : (
						<img
							width="20"
							height="20"
							src={IMG_NONVEG}
							alt="non-vegetarian-food-symbol"
						/>
					)}
					{isBestseller && (
						<div className="bg-red-600 text-white font-bold px-2 text-sm rounded-md">
							Bestseller
						</div>
					)}
				</div>
				<h3 className="font-bold text-lg">{name}</h3>
				<h4 className="font-semibold text-md">
					₹{Number(price) / 100 || Number(defaultPrice) / 100}
				</h4>
				{rating && ratingCount && (
					<div className="flex gap-1.5 items-center">
						<img className="w-5 h-5" src={STAR_ICON} alt="star-icon" />
						<p className="text-green-600 text-sm font-semibold">{rating}</p>
						<p className="text-sm">({ratingCount})</p>
					</div>
				)}
				<p className="text-justify font-mono text-sm mt-2">{description}</p>
			</div>
			<div className="flex flex-col w-[30%]">
				<div className=" flex justify-center items-center">
					<img
						alt="img not fpund"
						className="w-36 h-36 rounded-lg shadow-lg"
						src={RES_IMG_URL + `${imageId}`}
					/>
				</div>

				<form className="max-w-xs mx-auto my-2">
					<div className="relative flex items-center max-w-[8rem]">
						<button
							type="button"
							id="decrement-button"
							onClick={handleDecrementQty}
							data-input-counter-decrement="quantity-input"
							className="bg-white hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
							<svg
								className="w-3 h-3 text-gray-900 dark:text-black"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 2">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 1h16"
								/>
							</svg>
						</button>
						<input
							type="text"
							id="quantity-input"
							value={quantity}
							data-input-counter
							aria-describedby="helper-text-explanation"
							className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="0"
							required
						/>
						<button
							type="button"
							id="increment-button"
							onClick={handleIncrementQty}
							data-input-counter-increment="quantity-input"
							className="bg-white hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
							<svg
								className="w-3 h-3 text-gray-900 dark:text-black"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 18">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 1v16M1 9h16"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
			
		</div>
	);
};

export default CartItem;
