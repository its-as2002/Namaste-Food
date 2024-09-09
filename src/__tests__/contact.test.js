import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

it("should render the contact component and check that Get and Get in Touch is there on the screen", () => {
	render(<Contact />); // render the coponent on js-dom
	const get = screen.getByText(/Get/); // checks that Get is there on screen
	expect(get).toBeInTheDocument(); // checks that Get is there on screen
});

it("should render the contact component and check that Get and Get in Touch is there on the screen", () => {
	render(<Contact />); // render the coponent on js-dom
	const get = screen.getByText("Get in Touch"); // checks that Get in Touch is there on screen
	expect(get).toBeInTheDocument(); // checks that Get in Touch is there on screen
});

it("should render the contact component and check that the form is there on the screen", () => {
	render(<Contact />);
	const checkButton = screen.getByRole("button"); // checks that the form is there on screen
	expect(checkButton).toBeInTheDocument(); // checks that the form is there on screen
});
