"use client";

import * as React from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import theme from "../theme";
import menuItems, { MenuItem } from "@/config/menuConfig";
import { Session } from "@toolpad/core/AppProvider";

const BRANDING = {
  title: "Lekha",
  logo: (
    <Image src="/images/1intec.png" alt="Intec logo" width={100} height={50} />
  ),
};

// Function to filter menu items based on selected IDs
const generateNavigation = (allowedIds: string[]): MenuItem[] => {
  const filterMenuItems = (items: MenuItem[]): MenuItem[] =>
    items
      .filter((item) => {
        // Check if the item or any of its children are in allowedIds
        const isAllowed = allowedIds.includes(item.id);
        const hasAllowedChild = item.children
          ? item.children.some((child) => allowedIds.includes(child.id))
          : false;

        // Include the item if it's allowed or has allowed children
        return isAllowed || hasAllowedChild;
      })
      .map((item) => ({
        ...item,
        children: item.children ? filterMenuItems(item.children) : undefined,
      }));

  return filterMenuItems(menuItems);
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  // Define which IDs should be included in the navigation
  const allowedMenuIds = [
    "1000",
    "2000",
    "2001",
    "2002",
    "6000",
    "6001",
    "6002",
  ];

  // Generate navigation based on allowed IDs
  const NAVIGATION = generateNavigation(allowedMenuIds);

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
