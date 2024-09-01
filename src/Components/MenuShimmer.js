const MenuShimmer = () => {
	return (
		<div className="flex justify-center my-4">
			<div className="w-[50%] border-2 px-8 animate-pulse">
				<div className="h-8 bg-gray-300 rounded my-2"></div>
				<div className="border-8 w-full flex justify-between p-4 rounded-2xl">
					<div>
						<div className="flex gap-2 m-1">
							<div className="w-6 h-6 bg-gray-300 rounded-full"></div>
							<div className="w-20 h-6 bg-gray-300 rounded"></div>
						</div>
						<div className="w-40 h-4 bg-gray-300 rounded my-1"></div>
						<div className="w-28 h-4 bg-gray-300 rounded my-1"></div>
						<div className="w-24 h-4 bg-gray-300 rounded my-1"></div>
					</div>
					<div className="w-28 h-28 bg-gray-300 rounded-full border-2 shadow-2xl"></div>
				</div>

				<div className="menu mt-4">
					{Array(4)
						.fill("")
						.map((_, index) => (
							<div
								key={index}
								className="flex gap-10 p-justify-between m-2 p-8 rounded-2xl bg-slate-200 animate-pulse">
								<div className="w-[70%]">
									<div className="flex">
										<div className="w-5 h-5 bg-gray-300 rounded-full"></div>
										<div className="bg-red-300 w-16 h-6 ml-2 rounded"></div>
									</div>
									<div className="w-48 h-6 bg-gray-300 rounded my-2"></div>
									<div className="w-24 h-4 bg-gray-300 rounded my-1"></div>
									<div className="w-20 h-4 bg-gray-300 rounded my-1"></div>
									<div className="w-full h-8 bg-gray-300 rounded mt-2"></div>
								</div>
								<div className="w-[30%] right-data flex flex-col justify-center items-center">
									<div className="w-36 h-36 bg-gray-300 rounded-lg shadow-lg"></div>
									<div className="w-20 h-8 bg-gray-300 rounded-xl mt-4"></div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default MenuShimmer;
