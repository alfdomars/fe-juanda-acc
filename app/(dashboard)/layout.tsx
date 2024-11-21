import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Suspense } from "react";
// import Copyright from "@/components/pages/Copyright";

export default function DashboardPagesLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout disableCollapsibleSidebar>
      <Suspense>
        <PageContainer>
          {props.children}
          {/* <Copyright sx={{ my: 4 }} /> */}
        </PageContainer>
      </Suspense>
    </DashboardLayout>
  );
}
