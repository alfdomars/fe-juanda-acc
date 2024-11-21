import api from "@/api/apiConfig";

interface FilterOption {
  name: string;
  label: string;
  type: string;
  options?: { value: number | string; text: string }[];
}

interface ReportParams {
  reportName: string;
  filters: FilterOption[];
}

export const fetchReportParams = async (): Promise<ReportParams> => {
  try {
    const response = await api.get<ReportParams>("/report/get-param/a");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching report parameters:", error);
    throw error;
  }
};
