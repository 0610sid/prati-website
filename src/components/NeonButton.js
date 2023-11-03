import React from "react";
import { Link } from "@mui/material";

const NeonButton = ({ children, href }) => {
  return (
    <Link underline="none" color="inherit" href={href}>
      <div className="custom-btn btn-15">{children}</div>
    </Link>
  );
};

export default NeonButton;
