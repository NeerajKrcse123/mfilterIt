import StatCard from "@/components/Dashboard/StatCard";
import { render, screen } from "@testing-library/react";

describe("StatCard Component", () => {
  it("renders title and value correctly", () => {
    render(<StatCard title="Test Title" value="42%" />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("42%")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <StatCard title="Test Title" value="42%" description="Test Description" />
    );

    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StatCard title="Test" value="42%" className="custom-class" />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
