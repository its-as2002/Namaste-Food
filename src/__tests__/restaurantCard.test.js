import { render, screen } from "@testing-library/react";
import ReastrauntCard,{withRecommendedLabel} from "../Components/ReastrauntCard";
import { resData } from "../Utils/mockData";
import '@testing-library/jest-dom'

it("should render RestaurantCard component", () => {
    render(<ReastrauntCard resData={resData} />);
    const checkRestaurantCard = screen.getByText("Sainik Bhojnalaya");
    expect(checkRestaurantCard).toBeInTheDocument();
});

it("should render the withRecommended component",()=>{
    const RecommendedLabel = withRecommendedLabel(ReastrauntCard);// create a component for recommended label
    render(<RecommendedLabel resData={resData}/>);// passed the ,mock
    const recom = screen.getByText("Recommended");// recomemded will always be there whether we decrease the rating or increase because we are always rendering the component withRecommended Label 
    expect(recom).toBeInTheDocument();
})