import React from "react";
import "./Footer.css";
import { PROJECT_NAME } from "constants/constants";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      © {PROJECT_NAME}, All Rights Reserved {year}
    </div>
  );
};

export default Footer;
