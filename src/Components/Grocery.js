const Grocery = ()=>{
    // return <h1>This is the example of bundling ,chunking, dynamic import, lazy loading, chunking,onDemand loading</h1>
    return (
			<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 text-center">
					<div className="mb-6">
						<svg
							className="w-16 h-16 text-gray-400 mx-auto"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M20 21H4V4h16v17zM10 14l2-2 2 2m-2-2v8m6-12H4m16 0h-4m4 0l2 2m-6-2l-2 2"
							/>
						</svg>
					</div>
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Under Development
					</h1>
					<p className="text-lg text-gray-600 mb-6">
						We are currently working on something awesome. Stay tuned!
					</p>
					{/* <a href="./" className="text-indigo-600 hover:underline">
						Back to Home
					</a> */}
				</div>
			</div>
		);
}

export default Grocery;