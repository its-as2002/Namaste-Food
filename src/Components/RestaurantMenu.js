import { RES_IMG_URL, STAR_ICON, MENU_API } from "../Utils/constants";
import { useEffect, useState } from "react";
import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import Category from "./Category";


const RestaurantMenu = () => {
	const { resId } = useParams(); //params return an object with redId as key
	const [menuCard, setMenuCard] = useState("");
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetchMenuCard();
	}, []);

	const fetchMenuCard = async () => {
		const data = await fetch(MENU_API + `${resId}`);
		const json = await data.json();
		setMenuCard(json?.data?.cards[2]?.card?.card?.info);
		const filteredCategories =
			json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
				(card) =>
					(card?.card?.card?.["@type"] ===
					"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
					
			);
		setCategories(filteredCategories);
	};

	if (menuCard == "") 
		return <MenuShimmer />;
	
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
		<div className="flex justify-center my-4">
			<div className="w-[50%] border-2 px-8">
				<div className="res-name">
					<h1 className="font-bold my-2 text-2xl text-center">{name}</h1>
				</div>
				<div className="border-8 w-full flex justify-between p-4 rounded-2xl">
					<div className="">
						<div className="flex gap-2 m-1 font-semibold">
							<img className="w-6 h-6" id="ele" src={STAR_ICON}></img>
							<p id="ele">{avgRating}</p>
							<p id="ele">{`(${totalRatingsString})`}</p>
						</div>
						<h3 className="m-1 text-sm font-bold text-[#5CB3FF] underline">
							{cuisines?.join(", ")}
						</h3>
						<h4 className="m-1 text-slate-500 font-semibold">
							Outlet : {areaName}
						</h4>
						<h5 className="m-1 text-slate-500 font-semibold">
							{sla.slaString}
						</h5>
					</div>
					<div className="part2">
						<img
							className="w-28 h-28 rounded-full border-2 shadow-2xl"
							src={RES_IMG_URL + `${cloudinaryImageId}`}></img>
					</div>
				</div>
				<div>
					{categories.map((category, index) => (
						<Category
							key={index} title = {category.card.card.title}
							itemCards={category.card.card.itemCards}
						/>
					))}
				</div>
			
			</div>
		</div>
	);
};

export default RestaurantMenu;
