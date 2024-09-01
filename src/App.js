import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error_Page from "./Components/Error_Page";
import RestaurantMenu from './Components/RestaurantMenu';
import { Shimmer } from "./Components/Card_shimmmer";



const Grocery = lazy(()=>import("./Components/Grocery"))
const AppLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Outlet className=" flex-grow" />
			<Footer />
		</div>
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
				path: "/restaurants/:resId", // resId : uniqueId of restaurant
				element: <RestaurantMenu />,
				errorElement: <Error_Page />,
			},
			{
				path: "/grocery",
				element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
			}
		],
	},
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
