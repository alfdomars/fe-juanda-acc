import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
// import Copyright from "@/components/pages/Copyright";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout disableCollapsibleSidebar>
      <PageContainer>
        {props.children}
        {/* <Copyright sx={{ my: 4 }} /> */}
      </PageContainer>
    </DashboardLayout>
  );
}
