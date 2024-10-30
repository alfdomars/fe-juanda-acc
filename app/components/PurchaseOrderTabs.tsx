// // PurchaseOrderTabs.tsx
// import React from "react";
// import { Tabs, Tab } from "@mui/material";
// import DataGridTable from "@/app/components/datagrid/ServerDataGrid";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   { field: "orderNumber", headerName: "Order Number", width: 150 },
//   { field: "customerName", headerName: "Customer Name", width: 200 },
//   { field: "status", headerName: "Status", width: 130 },
//   { field: "amount", headerName: "Amount ($)", width: 130 },
// ];

// interface PurchaseOrderTabsProps {
//   tabIndex: number;
//   onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
//   allOrders: any[];
//   readyToShipOrders: any[];
//   inShippingOrders: any[];
// }

// const PurchaseOrderTabs: React.FC<PurchaseOrderTabsProps> = ({
//   tabIndex,
//   onTabChange,
//   allOrders,
//   readyToShipOrders,
//   inShippingOrders,
// }) => {
//   const renderOrders = () => {
//     switch (tabIndex) {
//       case 0:
//         return <DataGridTable columns={columns} rows={allOrders} />;
//       case 1:
//         return <DataGridTable columns={columns} rows={readyToShipOrders} />;
//       case 2:
//         return <DataGridTable columns={columns} rows={inShippingOrders} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Tabs
//         value={tabIndex}
//         onChange={onTabChange}
//         sx={{ borderBottom: 1, borderColor: "divider" }}
//       >
//         <Tab label="Semua Pesanan" />
//         <Tab label="Siap Dikirim" />
//         <Tab label="Dalam Pengiriman" />
//       </Tabs>
//       {renderOrders()}
//     </>
//   );
// };

// export default PurchaseOrderTabs;
