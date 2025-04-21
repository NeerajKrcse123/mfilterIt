import PieChart from "@/components/Dashboard/PieChart";
import { render, screen } from "@testing-library/react";

// Mock recharts
jest.mock("recharts", () => ({
  PieChart: ({ children }) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }) => <div data-testid="pie">{children}</div>,
  Cell: ({ fill }) => <div data-testid={`cell-${fill}`} />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
  ResponsiveContainer: ({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
}));

describe("PieChart Component", () => {
  const mockData = [
    { name: "Category A", value: 30 },
    { name: "Category B", value: 70 },
  ];

  const mockProps = {
    title: "Test Pie Chart",
    data: mockData,
    dataKey: "value",
    nameKey: "name",
    colors: ["#0088FE", "#00C49F"],
  };

  it("renders the chart title correctly", () => {
    render(<PieChart {...mockProps} />);

    expect(screen.getByText("Test Pie Chart")).toBeInTheDocument();
  });

  it("renders responsive container", () => {
    render(<PieChart {...mockProps} />);

    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();
  });

  it("renders the pie component", () => {
    render(<PieChart {...mockProps} />);

    expect(screen.getByTestId("pie")).toBeInTheDocument();
  });
});
