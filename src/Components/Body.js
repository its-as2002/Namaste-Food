import ReastrauntCard, { withRecommendedLabel } from "./ReastrauntCard";
import { useState, useEffect } from "react";
import { RES_IMG_URL, SWIGGY_API } from "../Utils/constants";
import { Shimmer } from "./Card_shimmmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Utils/custom-hooks";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Body = () => {
	const [dynamicResList, setdynamicResList] = useState([]);
	const [dynamicFilterResList, setdynamicFilterResList] = useState([]);
	const [searchText, setsearchText] = useState("");
	const [foodCategory, setfoodCategory] = useState([]);
	const RecommendedRestaurantCard = withRecommendedLabel(ReastrauntCard);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);
		const json = await data.json();

		setfoodCategory(
			json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
		);

		setdynamicResList(
			//optional chaining
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);

		setdynamicFilterResList(
			//optional chaining
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	const onlineStatus = useOnlineStatus();
	if (onlineStatus == false)
		return (
			<h1>
				Looks Like you are offline!! check your internet connection and try
				again
			</h1>
		);
	// 	conditional Rendering
	if (dynamicResList.length === 0) {
		return <Shimmer />;
	}
	const slideLeft = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft -= 500;
	};

	const slideRight = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft += 500;
	};

	return (
		<div className="p-5 flex flex-col item-center w-full">
			<div className="items-center flex relative ">
				<MdChevronLeft
					onClick={slideLeft}
					size={40}
					className="cursor-pointer opacity-50 hover:opacity-100"
				/>
				<div
					id="slider"
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
					{foodCategory.map((category) => {
						return (
							<img
								className="w-32 inline-block hover:scale-110 transition-all duration-300"
								src={RES_IMG_URL + `${category.imageId}`}
								alt="res_img"
							/>
						);
					})}
				</div>
				<MdChevronRight
					onClick={slideRight}
					size={40}
					className="cursor-pointer opacity-50 hover:opacity-100"
				/>
			</div>

			<div className="flex justify-center p-2">
				<input
					className="w-3/6 px-6 outline-none p-2 border-slate-300 border-2 rounded-lg"
					type="search"
					placeholder="Search Restaurants"
					value={searchText}
					onChange={(e) => {
						setsearchText(e.target.value);
					}}
				/>
				<i
					className="ri-search-2-line text-4xl mx-2 cursor-pointer"
					onClick={() => {
						const filterList = dynamicResList.filter((res) => {
							return res.info.name
								.toLowerCase()
								.includes(searchText.toLowerCase());
						});
						setdynamicFilterResList(filterList);
					}}></i>
			</div>
			<div className="flex justify-normal gap-2 px-10">
				<button
					className="transition-all hover:scale-90 w-auto p-2 text-sm text-slate-100 bg-gray-600 m-1 rounded-xl opacity-50 hover:opacity-100"
					onClick={() => {
						const filterList = dynamicResList.filter(
							(res) => res.info.avgRating >= 4
						);
						setdynamicFilterResList(filterList);
					}}>
					Top Rated Restaurants
				</button>
				<button
					className="transition-all hover:scale-90 w-auto p-2 text-sm text-slate-100 bg-gray-600 m-1 rounded-xl opacity-50 hover:opacity-100"
					onClick={() => {
						setdynamicFilterResList(dynamicResList);
					}}>
					Back to Home
				</button>
			</div>
			<div className="flex flex-wrap justify-evenly">
				{dynamicFilterResList.map((res_obj) => {
					console.log(res_obj.info);
					return (
						<Link
							to={"/restaurants/" + `${res_obj.info.id}`}
							key={res_obj.info.id}>
							{(res_obj.info.avgRating > 4.5) ? (
								<RecommendedRestaurantCard resData={res_obj} />
							) : (
								<ReastrauntCard resData={res_obj} />
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
