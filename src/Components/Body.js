import resList from "../Utils/mockData";
import ReastrauntCard from "./ReastrauntCard";
import { useState } from "react";
const Body = () => {
	const [dynamicResList, setResList] = useState(resList);
	return (
		<div className="mid-body">
			<div className="search">
				<input type="search" placeholder="Search" className="search-input" />
				<i class="ri-search-2-line"></i>
			</div>
			<div className="component">
				<button
					className="filter-btn"
					onClick={() => {
						const filterList = dynamicResList.filter((res) => res.info.avgRating > 4);
						setResList(filterList);
					}}>
						Top Rated Restaurants
				</button>
			</div>
			<div className="card-container">
				{dynamicResList.map((obj) => (
					<ReastrauntCard key={obj.info.id} resData={obj} />
				))}
			</div>
		</div>
	);
};

export default Body;
