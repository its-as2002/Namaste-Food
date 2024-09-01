import { RES_IMG_URL } from "../Utils/constants";
import { STAR_ICON } from "../Utils/constants";
const ReastrauntCard = (props) => {
	const { cuisines, name, avgRating, cloudinaryImageId, costForTwo } =
		props.resData.info;
	return (
		<div className="p-4 border-2 my-5 shadow-md rounded-xl transition-all hover:scale-110 hover:-z-30">
			<img
				className="flex justify-center w-60 h-[200] rounded-xl shadow-md"
				src={RES_IMG_URL + `${cloudinaryImageId}`}
				alt="restaurant img"
			/>
			<div className="w-60">
				<div className="flex justify-between">
					<h3 className="text-xl truncate font-bold">{name}</h3>
					<div className="flex gap-2 px-2">
						<img
							id="star"
							className="-z-20 size-[19] relative top-[2]"
							src={STAR_ICON}></img>
						<p className="font-semibold">{avgRating}</p>
					</div>
				</div>
				<h4 className="truncate font-semibold">{cuisines.join(",  ")}</h4>
				<h4 className="text-slate-400 font-semibold">{costForTwo}</h4>
				<h4 className="text-slate-400 font-semibold">
					{props.resData.info.sla.deliveryTime + " minutes"}
				</h4>
			</div>
		</div>
	);
};
export const withOpenLabel= (ReastrauntCard)=>{
	return (props)=>{
		return (
			<div className="relative">
				<label className="absolute top-2 z-40 left-2 bg-green-400 text-white font-bold px-2 py-1 rounded-md ">
					OPEN
				</label>
				<ReastrauntCard {...props} />
			</div>
		);
	}
}
export default ReastrauntCard;
