import AutoTitle from "components/AutoTitle";
import Breadcrumbs from "layout/breadcrumbs/Breadcrumbs";
import React from "react";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { to: "/clinics", label: "Clinics", isActive: true },
];

const Clinics: React.FC = () => {
  return (
    <React.Fragment>
      <AutoTitle title="Dashboard" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </React.Fragment>
  );
};

export default Clinics;
