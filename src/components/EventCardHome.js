import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const EventCard = ({ name, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="300" image={image} />
      <CardContent>
        <h3 style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
          {name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default EventCard;
