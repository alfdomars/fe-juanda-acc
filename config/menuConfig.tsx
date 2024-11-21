import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SummarizeIcon from "@mui/icons-material/Summarize";
export interface MenuItem {
  id: string;
  segment: string;
  title: string;
  icon?: React.ReactNode;
  kind?: "header";
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: "1000",
    segment: "",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: "2000",
    segment: "cif-report",
    title: "CIF REPORT",
    icon: <SummarizeIcon />,
    children: [
      {
        id: "2001",
        segment: "sipesat-report",
        title: "Si Pesat",
      },
      {
        id: "2002",
        segment: "terrorist-report",
        title: "Rincian Teroris",
      },
    ],
  },
  {
    id: "6000",
    segment: "administration",
    title: "Administration",
    icon: <SupervisorAccountIcon />,
    children: [
      {
        id: "6001",
        segment: "titles",
        title: "Titles",
      },
      {
        id: "6002",
        segment: "branches",
        title: "Branches",
      },
    ],
  },
];

export default menuItems;
