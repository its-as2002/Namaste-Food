import MenuItem from "./MenuItem";
import { useState } from "react";
const Category = (props) => {
    const { itemCards,title } = props;
    const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="">
			<h1 onClick={()=>{setIsOpen(!isOpen)}} className="cursor-pointer text-center p-3  font-bold text-lg m-4 border-y-4">{title}{' ('+itemCards.length+')'}</h1>
            {isOpen && itemCards.map((item) => (
				<MenuItem key={item.card.info.id} item={item} />
			))} 
		</div>
	);
};

export default Category;
