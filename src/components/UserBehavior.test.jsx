import UserBehavior from "@/components/Dashboard/UserBehavior";
import { render, screen } from "@testing-library/react";

describe("UserBehavior Component", () => {
  const mockBehaviors = [
    { name: "Mouse Movement", value: false },
    { name: "HasFocus", value: false },
    { name: "Time Spent On Page", value: "0 sec" },
  ];

  it("renders the component title", () => {
    render(<UserBehavior behaviors={mockBehaviors} />);
    expect(screen.getByText("User Behavior")).toBeInTheDocument();
  });

  it("renders all behavior items", () => {
    render(<UserBehavior behaviors={mockBehaviors} />);
    mockBehaviors.forEach(({ name, value }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(value.toString())).toBeInTheDocument();
    });
  });
});
