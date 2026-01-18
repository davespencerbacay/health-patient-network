export interface BreadcrumbItem {
  to?: string;
  label: string;
  isActive?: boolean;
}

export interface BreadcrumbContextType {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (breadcrumbs: BreadcrumbItem[]) => void;
}

