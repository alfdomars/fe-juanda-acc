"use client";

import * as React from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BlindIcon from "@mui/icons-material/Blind";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { Navigation, Session } from "@toolpad/core";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import theme from "../theme";

const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "header",
    title: "Sample",
  },
  {
    segment: "examples",
    title: "Examples",
    icon: <BlindIcon />,
  },
  {
    kind: "header",
    title: "Transaction",
  },
  {
    segment: "purchases",
    title: "Purchases",
    icon: <ShoppingCartIcon />,
    children: [
      {
        segment: "purchase-orders",
        title: "Purchase Orders",
      },
    ],
  },
  {
    segment: "sales",
    title: "Sales",
    icon: <PointOfSaleIcon />,
    children: [
      {
        segment: "pos",
        title: "Point of Sales",
      },
      {
        segment: "ngrs",
        title: "NGRS",
      },
    ],
  },
  {
    segment: "administration",
    title: "Administration",
    icon: <SupervisorAccountIcon />,
    children: [
      {
        segment: "titles",
        title: "Titles",
      },
      {
        segment: "branches",
        title: "Branches",
      },
      {
        segment: "outlets",
        title: "Outlets",
      },
    ],
  },
];

const BRANDING = {
  title: "Lekha",
  logo: (
    <Image src="/images/1intec.png" alt="Intec logo" width={100} height={50} />
  ),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider
            session={session}
            authentication={authentication}
            navigation={NAVIGATION}
            branding={BRANDING}
            theme={theme}
          >
            {props.children}
            <Toaster position="top-right" reverseOrder={false} />
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
