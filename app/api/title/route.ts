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
    const titles = await fetchFromBackend(`${API_BASE_URL}/title`);
    return NextResponse.json(titles);
  } catch (error) {
    console.error("Error fetching titles:", error);
    return NextResponse.json(
      { error: "Failed to fetch titles" },
      { status: 500 }
    );
  }
}

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
