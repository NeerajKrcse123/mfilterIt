import DataTable from "@/components/Dashboard/DataTable";
import { render, screen } from "@testing-library/react";

describe("DataTable Component", () => {
  const mockData = [
    { id: 1, name: "Item 1", value: 10 },
    { id: 2, name: "Item 2", value: 20 },
  ];

  const mockColumns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Value", accessorKey: "value" },
  ];

  it("renders the table title correctly", () => {
    render(
      <DataTable title="Test Table" data={mockData} columns={mockColumns} />
    );

    expect(screen.getByText("Test Table")).toBeInTheDocument();
  });

  it("renders all column headers", () => {
    render(
      <DataTable title="Test Table" data={mockData} columns={mockColumns} />
    );

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();
  });

  it("renders all data rows", () => {
    render(
      <DataTable title="Test Table" data={mockData} columns={mockColumns} />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});
