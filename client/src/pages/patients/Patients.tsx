import AutoTitle from "components/AutoTitle";
import Breadcrumbs from "layout/breadcrumbs/Breadcrumbs";
import React from "react";

const breadcrumbs = [
  { to: "/", label: "Portal" },
  { to: "/patients", label: "Patients", isActive: true },
];

const Patients: React.FC = () => {
  return (
    <React.Fragment>
      <AutoTitle title="Dashboard" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </React.Fragment>
  );
};

export default Patients;
