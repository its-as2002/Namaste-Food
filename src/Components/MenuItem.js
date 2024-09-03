import { RES_IMG_URL, STAR_ICON } from "../Utils/constants";
import { IMG_VEG, IMG_NONVEG } from "../Utils/constants";
const MenuItem = (props) => {
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
	return (
		<div className="flex gap-10 p-justify-between m-2 p-8 rounded-2xl bg-slate-200">
			<div className="w-[70%]">
				<div className="flex">
					{isVeg && (
						<img
							width="20"
							height="20"
							src={IMG_VEG}
							alt="vegetarian-food-symbol"
						/>
					)}
					{!isVeg && (
						<img
							width="20"
							height="20"
							src={IMG_NONVEG}
							alt="non-vegetarian-food-symbol"
						/>
					)}
					{isBestseller && (
						<div class=" bg-red-600 text-white font-bold px-2 text-sm rounded-md">
							Bestseller
						</div>
					)}
				</div>
				<h3 className="font-bold">{name}</h3>
				<h4 className="font-semibold">
					₹{Number(price) / 100 || Number(defaultPrice) / 100}
				</h4>
				{rating && ratingCount && (
					<div className="flex gap-1.5" id="rat-rev">
						<img className="w-5 h-5" src={STAR_ICON}></img>
						<p className="text-green-600 text-sm font-semibold">{rating}</p>
						<p className="text-sm"> ({ratingCount})</p>
					</div>
				)}
				<p className="text-justify font-mono text-sm my-1">{description}</p>
			</div>
			<div className="w-[30%] right-data flex flex-col justify-center items-center">
				<div className="img-div">
					<img
						className="w-36 h-36 rounded-lg shadow-lg"
						src={RES_IMG_URL + `${imageId}`}></img>
				</div>
				<div className="transition-all hover:scale-90 relative bottom-4 bg-white px-4 py-2 rounded-xl">
					<h4 className="font-semibold text-sm">Add+</h4>
				</div>
			</div>
		</div>
	);
};
export default MenuItem;
