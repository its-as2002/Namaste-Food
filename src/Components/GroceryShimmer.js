const GroceryShimmer = () => {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div
				className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 text-center"
				style={{
					background:
						"linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
					backgroundSize: "200% 100%",
					animation: "shimmer 1.5s infinite linear",
				}}>
				<div className="mb-6">
					<div
						className="w-16 h-16 bg-gray-300 rounded-full mx-auto"
						style={{
							background:
								"linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
							backgroundSize: "200% 100%",
							animation: "shimmer 1.5s infinite linear",
						}}></div>
				</div>
				<div
					className="h-8 bg-gray-300 rounded mb-4 w-3/4 mx-auto"
					style={{
						background:
							"linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
						backgroundSize: "200% 100%",
						animation: "shimmer 1.5s infinite linear",
					}}></div>
				<div
					className="h-4 bg-gray-300 rounded mb-4 w-5/6 mx-auto"
					style={{
						background:
							"linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
						backgroundSize: "200% 100%",
						animation: "shimmer 1.5s infinite linear",
					}}></div>
				<div
					className="h-4 bg-gray-300 rounded mb-6 w-2/3 mx-auto"
					style={{
						background:
							"linear-gradient(to right, #f0f0f0 4%, #e0e0e0 25%, #f0f0f0 36%)",
						backgroundSize: "200% 100%",
						animation: "shimmer 1.5s infinite linear",
					}}></div>
			</div>
		</div>
	);
};

export default GroceryShimmer;
