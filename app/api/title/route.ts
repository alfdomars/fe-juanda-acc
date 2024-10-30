import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/app/lib/apiConfig";

// Step 1: Define the Title type and valid sort fields
interface Title {
  id: number;
  name: string;
  createdAt: string;
  status: string;
}

// Define valid sort fields
const validSortFields: Array<keyof Title> = [
  "id",
  "name",
  "createdAt",
  "status",
];

// Function to fetch data from backend
const fetchFromBackend = async (url: string, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}, status: ${response.status}`);
  }
  return response.json();
};

// Sample title data (replace this with your actual data source)
const titlesData: Title[] = [
  { id: 1, name: "Manager", createdAt: "2023-01-01", status: "Active" },
  { id: 2, name: "Developer", createdAt: "2023-02-15", status: "Inactive" },
  // Add more mock titles as needed
];

// GET method for fetching titles with pagination and sorting
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "0");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const sortField = (searchParams.get("sortField") as keyof Title) || "id"; // Cast to keyof Title
  const sortOrder = searchParams.get("sortOrder") || "asc";

  try {
    const sortedTitles = [...titlesData].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    const paginatedTitles = sortedTitles.slice(
      page * pageSize,
      (page + 1) * pageSize
    );

    return NextResponse.json({
      data: paginatedTitles,
      total: sortedTitles.length, // Total number of titles for pagination
    });
  } catch (error) {
    console.error("Error fetching titles:", error);
    return NextResponse.json(
      { error: "Failed to fetch titles" },
      { status: 500 }
    );
  }
}

// POST method for creating a new title
export async function POST(req: Request) {
  try {
    const newTitle = await req.json();
    const createdTitle = await fetchFromBackend(`${API_BASE_URL}/title`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTitle),
    });
    return NextResponse.json(createdTitle, { status: 201 });
  } catch (error) {
    console.error("Error creating title:", error);
    return NextResponse.json(
      { error: "Failed to create title" },
      { status: 500 }
    );
  }
}

// PUT method for updating a title
export async function PUT(req: Request) {
  try {
    const updatedTitle = await req.json();
    const result = await fetchFromBackend(
      `${API_BASE_URL}/title/${updatedTitle.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTitle),
      }
    );
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating title:", error);
    return NextResponse.json(
      { error: "Failed to update title" },
      { status: 500 }
    );
  }
}

// DELETE method for deleting a title
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await fetchFromBackend(`${API_BASE_URL}/title/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json({ message: `Title ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting title:", error);
    return NextResponse.json(
      { error: "Failed to delete title" },
      { status: 500 }
    );
  }
}
