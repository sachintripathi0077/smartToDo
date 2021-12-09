import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function HomeCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 500,
          height: 250,
        },
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: "5%" }}>
        <div id="getStartedButton">
          <Link to="/dashboard" style={{ textDecoration: "none " }}>
            <Button variant="contained" size="large">
              Get Started
            </Button>
          </Link>
        </div>
      </Paper>
    </Box>
  );
}

export default HomeCard;
