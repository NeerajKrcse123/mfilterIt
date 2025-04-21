import ComplianceIssues from "@/components/Dashboard/ComplianceIssues";
import { render, screen } from "@testing-library/react";

describe("ComplianceIssues Component", () => {
  const mockIssues = [
    { name: "VPN Proxy", value: "3%" },
    {
      name: "Invalid Geo",
      value: "2%",
      description: "Mostly from restricted regions",
    },
  ];

  it("renders the component title", () => {
    render(<ComplianceIssues issues={mockIssues} />);

    expect(screen.getByText("Compliance Issues")).toBeInTheDocument();
  });

  it("renders all issues", () => {
    render(<ComplianceIssues issues={mockIssues} />);

    expect(screen.getByText("VPN Proxy")).toBeInTheDocument();
    expect(screen.getByText("3%")).toBeInTheDocument();
    expect(screen.getByText("Invalid Geo")).toBeInTheDocument();
    expect(screen.getByText("2%")).toBeInTheDocument();
  });

  it("renders issue description when provided", () => {
    render(<ComplianceIssues issues={mockIssues} />);

    expect(
      screen.getByText("Mostly from restricted regions")
    ).toBeInTheDocument();
  });
});
