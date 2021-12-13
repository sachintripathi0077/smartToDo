import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FlareIcon from "@mui/icons-material/Flare";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import { pink } from "@mui/material/colors";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { purple } from "@mui/material/colors";
import { Link, Route, Routes } from "react-router-dom";
import MyDay from "./DrawerPages/MyDay";

const drawerWidth = "auto";

function SideDrawer(props) {
  const handleClick = (type) => {
    props.displayType(type);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          zIndex: 1,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem
            button
            key={"My Day"}
            onClick={() => handleClick("MyDay")}
            selected={props.selectedItem === "MyDay"}
          >
            <ListItemIcon>
              <FlareIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"My Day"} />
          </ListItem>

          <ListItem
            button
            key={"Important"}
            onClick={() => handleClick("Important")}
            selected={props.selectedItem === "Important"}
          >
            <ListItemIcon>
              <GradeOutlinedIcon sx={{ color: pink[500] }} />
            </ListItemIcon>
            <ListItemText primary={"Important"} />
          </ListItem>

          <ListItem
            button
            key={"Planned"}
            onClick={() => handleClick("Planned")}
            selected={props.selectedItem === "Planned"}
          >
            <ListItemIcon>
              <GridViewOutlinedIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={"Planned"} />
          </ListItem>

          <ListItem
            button
            key={"Assigned to me"}
            onClick={() => handleClick("Assigned")}
            selected={props.selectedItem === "Assigned"}
          >
            <ListItemIcon>
              <PersonOutlinedIcon color="action" />
            </ListItemIcon>
            <ListItemText primary={"Assigned to me"} />
          </ListItem>

          <ListItem
            button
            key={"All Tasks"}
            onClick={() => handleClick("All")}
            selected={props.selectedItem === "All"}
          >
            <ListItemIcon>
              <ListOutlinedIcon sx={{ color: purple[500] }} />
            </ListItemIcon>
            <ListItemText primary={"All Tasks"} />
          </ListItem>
        </List>

        <Divider />
      </Drawer>
    </Box>
  );
}

export default SideDrawer;
