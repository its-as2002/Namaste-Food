import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import appStore from "../Utils/SliceStore/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the header component and check that the login button is there on the screen", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const checkLoginButton = screen.getByRole("button", { name: "Login" });
	expect(checkLoginButton).toBeInTheDocument();
});

it("should render and check that the Login button when click changes to Logout", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginButton = screen.getByRole("button", { name: "Login" }); // find the login button
	fireEvent.click(loginButton); // click the login button
	const logoutButton = screen.getByRole("button", { name: "Logout" }); // check for converted name to Login;
	expect(logoutButton).toBeInTheDocument(); // check that the logout button is there on screen
});
