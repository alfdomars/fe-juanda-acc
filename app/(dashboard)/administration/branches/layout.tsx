import * as React from "react";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Suspense } from "react";
// import Copyright from "@/components/pages/Copyright";

export default function BranchPagesLayout(props: {
  children: React.ReactNode;
}) {
  return <Suspense>{props.children}</Suspense>;
}
