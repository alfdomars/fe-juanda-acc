import api from "@/api/apiConfig";

export interface Branch {
  id: number;
  name: string;
  address: string;
}

export const fetchBranches = async (): Promise<Branch[]> => {
  try {
    const response = await api.get<Branch[]>("/branches");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching branches:", error);
    throw error;
  }
};

export const createBranch = async (
  branchData: Omit<Branch, "id">
): Promise<Branch> => {
  try {
    const response = await api.post<Branch>("/branches", branchData);
    return response.data;
  } catch (error: any) {
    console.error("Error creating branch:", error);
    throw error;
  }
};
