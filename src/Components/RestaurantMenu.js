import { RES_IMG_URL, STAR_ICON, MENU_API } from "../Utils/constants";
import { useEffect, useState } from "react";
import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
	const { resId } = useParams(); //params return an object with redId as key
	const [menuCard, setMenuCard] = useState("");
	const [menuItems, setMenuItems] = useState([]);
	useEffect(() => {
		fetchMenuCard();
	}, []);

	const fetchMenuCard = async () => {
		const data = await fetch(MENU_API + `${resId}`);
		const json = await data.json();
		setMenuCard(json?.data?.cards[2]?.card?.card?.info);
		setMenuItems(
			json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card?.itemCards
		);
	};

	if (menuCard == "") {
		return <MenuShimmer />;
	}
	const {
		name,
		cloudinaryImageId,
		avgRating,
		cuisines,
		areaName,
		totalRatingsString,
		sla,
	} = menuCard;

	return (
		<div className="menu-container">
			<div className="menu-panel">
				<div className="res-name">
					<h1>{name}</h1>
				</div>
				<div className="banner">
					<div className="part1">
						<div className="banner-element">
							<img className="star-icon" id="ele" src={STAR_ICON}></img>
							<p id="ele">{avgRating}</p>
							<p id="ele">{`(${totalRatingsString})`}</p>
						</div>
						<h3 className="banner-element">{cuisines?.join(", ")}</h3>
						<h4 className="banner-element">Outlet : {areaName}</h4>
						<h5 className="banner-element">{sla.slaString}</h5>
					</div>
					<div className="part2">
						<img
							className="banner-img"
							src={RES_IMG_URL + `${cloudinaryImageId}`}></img>
					</div>
				</div>
				<div className="menu">
					<h1>Menu</h1>
					{menuItems.map((item) => (
						<MenuItem key={item.card.info.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RestaurantMenu;
