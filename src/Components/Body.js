import ReastrauntCard, { withOpenLabel } from "./ReastrauntCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../Utils/constants";
import { Shimmer } from "./Card_shimmmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Utils/custom-hooks";
const Body = () => {
	const [dynamicResList, setdynamicResList] = useState([]);
	const [dynamicFilterResList, setdynamicFilterResList] = useState([]);
	const [searchText, setsearchText] = useState("");
	const OpenRestaurantCard = withOpenLabel(ReastrauntCard);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);
		const json = await data.json();

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
	// 	if (dynamicResList.length === 0) {
	// 		return <Shimmer />;
	// 	}
	return !dynamicResList.length ? (
		<Shimmer />
	) : (
		<div className="w-full p-5">
			<div className="flex justify-between p-2">
				<input
					className="w-full px-6 outline-none p-2 border-slate-300 border-2 rounded-lg"
					type="search"
					placeholder="Search Restaurants"
					value={searchText}
					onChange={(e) => {
						setsearchText(e.target.value);
					}}
				/>
				<i
					className="ri-search-2-line text-4xl mx-2"
					onClick={() => {
						const filterList = dynamicResList.filter((res) => {
							return res.info.name
								.toLowerCase()
								.includes(searchText.toLowerCase());
						});
						setdynamicFilterResList(filterList);
					}}></i>
			</div>
			<div className="flex justify-normal gap-2">
				<button
					className="transition-all hover:scale-90 w-auto p-2 text-sm text-slate-100 bg-gray-600 m-1 rounded-xl"
					onClick={() => {
						const filterList = dynamicResList.filter(
							(res) => res.info.avgRating >= 4
						);
						setdynamicFilterResList(filterList);
					}}>
					Top Rated Restaurants
				</button>
				<button
					className="transition-all hover:scale-90 w-auto p-2 text-sm text-slate-100 bg-gray-600 m-1 rounded-xl"
					onClick={() => {
						setdynamicFilterResList(dynamicResList);
					}}>
					Back to Home
				</button>
			</div>
			<div className="flex flex-wrap justify-evenly">
				{dynamicFilterResList.map((res_obj) => (
					<Link
						to={"/restaurants/" + `${res_obj.info.id}`}
						key={res_obj.info.id}>
						{res_obj.info ? (
							<OpenRestaurantCard resData={res_obj} />
						) : (
							<ReastrauntCard resData={res_obj} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
