import * as React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StateInformation = ({
  state,
  image,
  width = "220px",
  height = "280px",
  leftMargin = "20px",
  rightMargin = "20px",
}) => {
  const navigate = useNavigate();

  // const handlerClick = () => {
  //   navigate("/login");
  // };

  const handlerClick = () => {
    navigate("/login", { state: { selectedState: state } });
  };

  return (
    <Box
      sx={{
        width: width,
        height: height,
        marginLeft: leftMargin,
        marginRight: rightMargin,
      }}
    >
      <Card
        onClick={handlerClick}
        sx={{
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardMedia
            sx={{ 
                height: 120, 
                width: width,
                objectFit: "contain",
                backgroundColor: "white",
            }}
            image={ image }
            loading='lazy'
            alt={`Imagen del estado ${state}`}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, color: "black" }}
          >
            {state}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StateInformation;

