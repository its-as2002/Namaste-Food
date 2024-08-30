import ReastrauntCard from "./ReastrauntCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../Utils/constants";
import { Shimmer } from "./Card_shimmmer";
import { Link } from "react-router-dom";

const Body = () => {
	const [dynamicResList, setdynamicResList] = useState([]);
	const [dynamicFilterResList, setdynamicFilterResList] = useState([]);
	const [searchText, setsearchText] = useState("");
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);
		const json = await data.json();

		setdynamicResList(
			//optional chaining
			json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);

		setdynamicFilterResList(
			//optional chaining
			json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	// 	conditional Rendering
	// 	if (dynamicResList.length === 0) {
	// 		return <Shimmer />;
	// 	}
	return !dynamicResList.length ? (
		<Shimmer />
	) : (
		<div className="mid-body">
			<div className="search">
				<input
					className="search-input"
					type="search"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setsearchText(e.target.value);
					}}
				/>
				<i
					class="ri-search-2-line"
					onClick={() => {
						const filterList = dynamicResList.filter((res) => {
							return res.info.name
								.toLowerCase()
								.includes(searchText.toLowerCase());
						});
						setdynamicFilterResList(filterList);
					}}></i>
			</div>
			<div className="component">
				<button
					className="filter-btn"
					onClick={() => {
						const filterList = dynamicResList.filter(
							(res) => res.info.avgRating >= 4
						);
						setdynamicFilterResList(filterList);
					}}>
					Top Rated Restaurants
				</button>
				<button className="home-page" onClick={()=>{
					setdynamicFilterResList(dynamicResList);
				}}>Back to Home</button>
			</div>
			<div className="card-container">
				{dynamicFilterResList.map((obj) => (
					<Link to={"/restaurants/" + `${obj.info.id}`} key={obj.info.id}>
						<ReastrauntCard resData={obj} />
					</Link>
				))}
			</div>
			<div className="load-more">
				<h3> Load More</h3>
			</div>
		</div>
	);
};

export default Body;
