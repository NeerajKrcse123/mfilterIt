import DashboardPage from "@/app/dashboard/page";
import { render, screen } from "@testing-library/react";

// Mock all the imported components
jest.mock("@/components/ui/tabs", () => ({
  Tabs: ({ children }) => <div data-testid="tabs">{children}</div>,
  TabsContent: ({ children, value }) => (
    <div data-testid={`tabs-content-${value}`}>{children}</div>
  ),
  TabsList: ({ children }) => <div data-testid="tabs-list">{children}</div>,
  TabsTrigger: ({ children, value }) => (
    <div data-testid={`tabs-trigger-${value}`}>{children}</div>
  ),
}));

jest.mock("@/components/Dashboard/StatCard", () => ({
  __esModule: true,
  default: ({ title }) => <div data-testid={`stat-card-${title}`}>{title}</div>,
}));

jest.mock("@/components/Dashboard/BarChart", () => ({
  __esModule: true,
  default: ({ title }) => <div data-testid={`bar-chart-${title}`}>{title}</div>,
}));

jest.mock("@/components/Dashboard/PieChart", () => ({
  __esModule: true,
  default: ({ title }) => <div data-testid={`pie-chart-${title}`}>{title}</div>,
}));

jest.mock("@/components/Dashboard/DataTable", () => ({
  __esModule: true,
  default: ({ title }) => (
    <div data-testid={`data-table-${title}`}>{title}</div>
  ),
}));

jest.mock("@/components/Dashboard/DevicePerformance", () => ({
  __esModule: true,
  default: () => <div data-testid="device-performance">Device Performance</div>,
}));

jest.mock("@/components/Dashboard/ComplianceIssues", () => ({
  __esModule: true,
  default: () => <div data-testid="compliance-issues">Compliance Issues</div>,
}));

jest.mock("@/components/Dashboard/UserBehavior", () => ({
  __esModule: true,
  default: () => <div data-testid="user-behavior">User Behavior</div>,
}));

describe("DashboardPage", () => {
  it("renders the dashboard title", () => {
    render(<DashboardPage />);
    expect(screen.getByText("Analytics Dashboard")).toBeInTheDocument();
  });

  it("renders both tabs", () => {
    render(<DashboardPage />);
    expect(screen.getByTestId("tabs-trigger-analysis")).toBeInTheDocument();
    expect(screen.getByTestId("tabs-trigger-traffic")).toBeInTheDocument();
  });

  it("renders analysis insights content", () => {
    render(<DashboardPage />);
    expect(screen.getByTestId("tabs-content-analysis")).toBeInTheDocument();
    expect(screen.getByTestId("compliance-issues")).toBeInTheDocument();
    expect(screen.getByTestId("user-behavior")).toBeInTheDocument();
  });

  it("renders traffic insights content", () => {
    render(<DashboardPage />);
    expect(screen.getByTestId("tabs-content-traffic")).toBeInTheDocument();
    expect(screen.getByTestId("device-performance")).toBeInTheDocument();
  });
});
