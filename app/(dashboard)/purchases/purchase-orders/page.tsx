"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";
import PurchaseOrderTabs from "@/app/components/PurchaseOrderTabs";

// Define the Order interface
interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  status: string;
  amount: number;
}

// Function to generate dummy data
const generateDummyOrders = (num: number): Order[] => {
  const orders: Order[] = [];
  for (let i = 1; i <= num; i++) {
    orders.push({
      id: i,
      orderNumber: `PO00${i}`,
      customerName: `Customer ${i}`,
      status: i % 3 === 0 ? "Shipped" : i % 3 === 1 ? "Pending" : "Completed",
      amount: parseFloat((Math.random() * 1000).toFixed(2)),
    });
  }
  return orders;
};

// Generate orders
const allOrders: Order[] = generateDummyOrders(100);
const readyToShipOrders: Order[] = allOrders.filter(
  (order) => order.status === "Ready to Ship"
);
const inShippingOrders: Order[] = allOrders.filter(
  (order) => order.status === "In Shipping"
);

const PurchaseOrdersPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleCreate = () => {
    router.push("/purchases/purchase-orders/create");
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5" gutterBottom>
          Daftar Pesanan
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Create Purchase Order
        </Button>
      </Box>

      <Card variant="outlined">
        <CardContent>
          <PurchaseOrderTabs
            tabIndex={tabIndex}
            onTabChange={handleTabChange}
            allOrders={allOrders}
            readyToShipOrders={readyToShipOrders}
            inShippingOrders={inShippingOrders}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default PurchaseOrdersPage;
