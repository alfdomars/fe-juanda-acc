// pages/api/generate-report.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { reportType } = req.body;

    // Validasi input
    if (!["PDF", "XLS"].includes(reportType)) {
      return res.status(400).json({ message: "Invalid report type" });
    }

    // Set header dan isi konten berdasarkan tipe report
    if (reportType === "PDF") {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "inline; filename=report.pdf");
      res.status(200).send("Dummy PDF content for testing");
    } else if (reportType === "XLS") {
      res.setHeader("Content-Type", "application/vnd.ms-excel");
      res.setHeader("Content-Disposition", "inline; filename=report.xls");
      res.status(200).send("Dummy XLS content for testing");
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
