import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

function LoadingCertificate() {
  return (
    <Card sx={{ maxWidth: "18rem", margin: "40px 40px"}}>
      <Skeleton variant="rectangular" height="140px" animation="wave" />
      <CardContent>
        <Skeleton variant="rectangular" height="30px" animation="wave" />
        <Skeleton variant="text" animation="wave" />
      </CardContent>
    </Card>
  );
}

export default LoadingCertificate;