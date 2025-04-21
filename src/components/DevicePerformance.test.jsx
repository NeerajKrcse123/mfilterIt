import DevicePerformance from "@/components/Dashboard/DevicePerformance";
import { render, screen } from "@testing-library/react";

describe("DevicePerformance Component", () => {
  const mockDevices = [
    {
      label: "High End",
      visits: "50%",
      orders: "70%",
      className: "bg-blue-100",
    },
    {
      label: "Medium End",
      visits: "40%",
      orders: "25%",
      className: "bg-green-100",
    },
    {
      label: "Low End",
      visits: "10%",
      orders: "5%",
      className: "bg-amber-100",
    },
  ];

  it("renders all device categories", () => {
    render(<DevicePerformance devices={mockDevices} />);

    expect(screen.getByText("High End")).toBeInTheDocument();
    expect(screen.getByText("Medium End")).toBeInTheDocument();
    expect(screen.getByText("Low End")).toBeInTheDocument();
  });

  it("renders visits and orders for each device", () => {
    render(<DevicePerformance devices={mockDevices} />);

    // Check for visits
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("40%")).toBeInTheDocument();
    expect(screen.getByText("10%")).toBeInTheDocument();

    // Check for orders
    expect(screen.getByText("70%")).toBeInTheDocument();
    expect(screen.getByText("25%")).toBeInTheDocument();
    expect(screen.getByText("5%")).toBeInTheDocument();
  });
});
