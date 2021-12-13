import SideDrawer from "./Layout/SideDrawer";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputBar from "./InputBar";
import MyDay from "./Layout/DrawerPages/MyDay";
import Important from "./Layout/DrawerPages/Important";
import Planned from "./Layout/DrawerPages/Planned";
import Assigned from "./Layout/DrawerPages/Assigned";
import All from "./Layout/DrawerPages/All";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
  const [drawerItem, setDrawerItem] = useState({
    item: "MyDay",
  });
  const displayDrawerItemType = (type) => {
    setDrawerItem({ item: type });
  };

  useEffect(() => {
    console.log(drawerItem.item, "==>State");
  }, [drawerItem]);

  const renderDrawerItem = () => {
    switch (drawerItem.item) {
      case "MyDay":
        return <MyDay />;
      case "Important":
        return <Important />;
      case "Planned":
        return <Planned />;
      case "Assigned":
        return <Assigned />;
      case "All":
        return <All />;
      default:
        return <MyDay />;
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={6} md={2}>
            <SideDrawer
              displayType={displayDrawerItemType}
              selectedItem={drawerItem.item}
            />
          </Grid>
          <Grid item xs={6} md={10}>
            {renderDrawerItem()}

            <InputBar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
