import MenuItem from "./MenuItem";

const Category = (props) => {
	const { index,itemCards, title ,isOpen,showIndex,setShowIndex} = props;
	// const [isOpen, setIsOpen] = useState(false); giving the control to the parent component so that when accerdion opens then other collapse
	return (
		<div>
			<h1
				onClick={() => {
					if(index === showIndex)
						setShowIndex(null);
					else
					setShowIndex(index);
				}}
				className="cursor-pointer text-center p-3 shadow-xl font-bold text-lg m-4 border-y-4">
				{title}
				{" (" + itemCards.length + ")"}
			</h1>
			{isOpen &&
				itemCards.map((item) => (
					<MenuItem key={item.card.info.id} item={item} />
				))}
		</div>
	);
};

export default Category;

