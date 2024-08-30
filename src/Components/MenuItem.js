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
		<div className="menu-items">
			<div className="left-data">
				<div className="type-bestsell">
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
					{isBestseller && <div class="bestseller-badge">Bestseller</div>}
				</div>
				<h3>{name}</h3>
				<h4>₹{Number(price) / 100 || Number(defaultPrice) / 100}</h4>
				{rating && ratingCount && (
					<div className="rating-review" id="rat-rev">
						<img className="menu-list-star" src={STAR_ICON} id="st"></img>
						<p id="st">{rating}</p>
						<p id="st"> ({ratingCount})</p>
					</div>
				)}
				<p>{description}</p>
			</div>
			<div className="right-data">
				<div className="img-div">
					<img className="menu-img" src={RES_IMG_URL + `${imageId}`}></img>
				</div>
				<div className="add-button">
					<h4>Add+</h4>
				</div>
			</div>
		</div>
	);
};
export default MenuItem;
