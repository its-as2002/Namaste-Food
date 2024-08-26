import { RES_IMG_URL } from "../Utils/constants";
const ReastrauntCard = (props) => {
	const { cuisines, name, avgRating, cloudinaryImageId, costForTwo } =
		props.resData.info;
	return (
		<div className="card">
			<img
				src={RES_IMG_URL+`${cloudinaryImageId}`}
				alt="food"
			/>
			<div className="content">
				<h3>{name}</h3>
				<h4>{cuisines.join(",  ")}</h4>
				<h4>{avgRating}</h4>
				<h4>{costForTwo}</h4>
				<h4>{props.resData.info.sla.deliveryTime + " minutes"}</h4>
			</div>
		</div>
	);
};

export default ReastrauntCard;