import { Box } from "@mui/material";
import AutoTitle from "components/AutoTitle";
import Breadcrumbs from "layout/breadcrumbs/Breadcrumbs";
import type { BreadcrumbItem } from "models/Breadcrumbs";
import React from "react";

interface ContentWrapperProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}
const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
  return (
    <Box>
      <AutoTitle title={props.title} />
      <Breadcrumbs breadcrumbs={props.breadcrumbs} />
      <main>{props.children}</main>
    </Box>
  );
};

export default ContentWrapper;
