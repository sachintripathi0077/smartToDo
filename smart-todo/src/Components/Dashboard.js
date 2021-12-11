import SideDrawer from "./Layout/SideDrawer";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputBar from "./InputBar";

function Dashboard() {
  console.log("Dashboard loaded.");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6} md={2}>
            <SideDrawer />
          </Grid>
          <Grid item xs={6} md={10}>
            
            <div id="inputBarPos">
              <InputBar />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
