import { render, screen } from "@testing-library/react";
import MainCard from "./MainCard";
import mockData from "../../data/file-structure.json";
import formatDate from "../../utils/formatDate";

function findEntityWithMeta(node) {
  if (
    node.type === "entity" &&
    node.industry &&
    node.owner &&
    node.jurisdiction &&
    node.created_at &&
    node.last_modified
  ) {
    return node;
  }
  if (node.children) {
    for (const child of node.children) {
      const result = findEntityWithMeta(child);
      if (result) return result;
    }
  }
  return null;
}

describe("MainCard", () => {
  it("renders the root node info with 'Entities' table", () => {
    render(<MainCard node={mockData} />);
    expect(screen.getByText("Entities")).toBeInTheDocument();
  });

  it("renders 'Investments' table when selecting an entity node", () => {
    const entityNode = mockData.children.find((n) => n.type === "entity");
    render(<MainCard node={entityNode} />);
    expect(screen.getByText(/Investments/i)).toBeInTheDocument();
  });

  it("shows 'No documents available.' when no related files", () => {
    const emptyNode = { name: "Empty Folder", children: [], files: [] };
    render(<MainCard node={emptyNode} />);
    expect(screen.getByText("No documents available.")).toBeInTheDocument();
  });

  it("displays meta information from the JSON node", () => {
    const entityNode = findEntityWithMeta(mockData);
    if (!entityNode) {
      throw new Error("No entity node with meta info found.");
    }

    render(<MainCard node={entityNode} />);

    const { industry, jurisdiction, owner, created_at, last_modified } =
      entityNode;

    expect(screen.getByText(new RegExp(industry))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(jurisdiction))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(owner))).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(formatDate(created_at)))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(formatDate(last_modified)))
    ).toBeInTheDocument();
  });
});
