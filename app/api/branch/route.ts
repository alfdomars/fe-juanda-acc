import { NextResponse } from "next/server";
import { API_BASE_URL } from "@/app/lib/apiConfig";

const fetchFromBackend = async (url: string, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}, status: ${response.status}`);
  }
  return response.json();
};

export async function GET() {
  try {
    const branches = await fetchFromBackend(`${API_BASE_URL}/branch`);
    return NextResponse.json(branches);
  } catch (error) {
    console.error("Error fetching branches:", error);
    return NextResponse.json(
      { error: "Failed to fetch branches" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const newBranch = await req.json();
    const createdBranch = await fetchFromBackend(`${API_BASE_URL}/branch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBranch),
    });
    return NextResponse.json(createdBranch, { status: 201 });
  } catch (error) {
    console.error("Error creating branch:", error);
    return NextResponse.json(
      { error: "Failed to create branch" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const updatedBranch = await req.json();
    const result = await fetchFromBackend(
      `${API_BASE_URL}/branch/${updatedBranch.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBranch),
      }
    );
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating branch:", error);
    return NextResponse.json(
      { error: "Failed to update branch" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await fetchFromBackend(`${API_BASE_URL}/branch/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json({ message: `Branch ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting branch:", error);
    return NextResponse.json(
      { error: "Failed to delete branch" },
      { status: 500 }
    );
  }
}
