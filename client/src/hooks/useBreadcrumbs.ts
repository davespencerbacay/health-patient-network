import BreadcrumbContext from "contexts/BreadcrumbContext";
import type { BreadcrumbContextType } from "models/Breadcrumbs";
import { useContext } from "react";

 const useBreadcrumbs = (): BreadcrumbContextType => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("useBreadcrumbs must be used within a BreadcrumbProvider");
  }
  return context;
};

export default useBreadcrumbs
