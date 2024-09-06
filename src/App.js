import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error_Page from "./Components/Error_Page";
import RestaurantMenu from "./Components/RestaurantMenu";
import GroceryShimmer from "./Components/GroceryShimmer";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/SliceStore/appStore";
import Cart from "./Components/Cart.js";
import Checkout from "./Components/CheckOut.js";

const Grocery = lazy(() => import("./Components/Grocery"));
const AppLayout = () => {
	const [userName, setUserName] = useState();
	useEffect(() => {
		//Make an API call send userName and Password
		const data = {
			name: "Itachi",
		};
		setUserName(data.name);
	});

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: userName }}>
				<div className="flex flex-col min-h-screen">
					<Header />
					<div className="flex-grow overflow-y-auto">
						<Outlet />
					</div>
					<Footer />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error_Page />,
		children: [
			// if want the content to load between header and Footer
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart", // resId : uniqueId of restaurant
				element: <Cart />,
			},
			{
				path: "/restaurants/:resId", // resId : uniqueId of restaurant
				element: <RestaurantMenu />,
				errorElement: <Error_Page />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<GroceryShimmer />}>
						<Grocery />{" "}
						{/*it is a dynamic import that's why Suspense variable is used here*/}
					</Suspense>
				),
			},
			{ path: "/checkout", element: <Checkout /> },
		],
	},
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
