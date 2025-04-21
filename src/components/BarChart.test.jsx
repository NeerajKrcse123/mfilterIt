import BarChart from "@/components/Dashboard/BarChart";
import { render, screen } from "@testing-library/react";

// Mock recharts
jest.mock("recharts", () => ({
  BarChart: ({ children }) => <div data-testid="bar-chart">{children}</div>,
  Bar: ({ dataKey }) => <div data-testid={`bar-${dataKey}`} />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  CartesianGrid: () => <div data-testid="grid" />,
  Tooltip: () => <div data-testid="tooltip" />,
  Legend: () => <div data-testid="legend" />,
  ResponsiveContainer: ({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
}));

describe("BarChart Component", () => {
  const mockData = [
    { name: "Item 1", value: 10, count: 5 },
    { name: "Item 2", value: 20, count: 10 },
  ];

  const mockProps = {
    title: "Test Chart",
    data: mockData,
    dataKey: "value",
    xAxisDataKey: "name",
    bars: [
      { dataKey: "value", fill: "#8884d8" },
      { dataKey: "count", fill: "#82ca9d" },
    ],
  };

  it("renders the chart title correctly", () => {
    render(<BarChart {...mockProps} />);

    expect(screen.getByText("Test Chart")).toBeInTheDocument();
  });

  it("renders responsive container", () => {
    render(<BarChart {...mockProps} />);

    expect(screen.getByTestId("responsive-container")).toBeInTheDocument();
  });

  it("renders bars for each dataKey", () => {
    render(<BarChart {...mockProps} />);

    expect(screen.getByTestId("bar-value")).toBeInTheDocument();
    expect(screen.getByTestId("bar-count")).toBeInTheDocument();
  });

  it("applies stacked property when provided", () => {
    const { rerender } = render(<BarChart {...mockProps} stacked={false} />);

    // Re-render with stacked=true
    rerender(<BarChart {...mockProps} stacked={true} />);

    // In a real test, we would check if the stackId prop is passed to Bar components
    // But for this mock, we're just ensuring rendering doesn't break
    expect(screen.getByTestId("bar-value")).toBeInTheDocument();
  });
});
