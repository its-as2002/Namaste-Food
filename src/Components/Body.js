import resList from "../Utils/mockData"
import ReastrauntCard from "./ReastrauntCard";
const Body = () => {
	return (
		<div className="mid-body">
			<div className="search">
				<input type="search" placeholder="Search" className="search-input" />
				<i class="ri-search-2-line"></i>
			</div>
			<div className="card-container">
				{resList.map((obj) => (
					<ReastrauntCard key={obj.info.id} resData={obj} />
				))}
			</div>
		</div>
	);
};

export default Body;