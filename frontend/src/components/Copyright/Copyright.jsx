import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

export const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https:/github.com/matheusmunarao/mevuun"
      >
        Mevuun
      </Link>
    </Typography>
  );
};
