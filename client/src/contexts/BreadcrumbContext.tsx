import type { BreadcrumbContextType, BreadcrumbItem } from "models/Breadcrumbs";
import React, { createContext, useState, useCallback } from "react";

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(
  undefined
);

interface BreadcrumbProviderProps {
  children: React.ReactNode;
}

export const BreadcrumbProvider: React.FC<BreadcrumbProviderProps> = ({
  children,
}) => {
  const [breadcrumbs, setBreadcrumbsState] = useState<BreadcrumbItem[]>([]);

  const setBreadcrumbs = useCallback((items: BreadcrumbItem[]) => {
    setBreadcrumbsState(items);
  }, []);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbContext;
