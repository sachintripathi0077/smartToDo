import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useState, useEffect } from "react";

const ITEM_HEIGHT = "auto";

export default function SimplePaper(props) {
  
  //====================================IconMenu logic Start======================================
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //====================================IconMenu logic End======================================
  const handleDeleteTask=()=>{
    // console.log("Deleting task.",props.index)
    const taskType = props.type
    props.delete(taskType,props.index)
    handleClose();
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "85%",
            height: "auto",
            margin: "0px",
          },
        }}
      >
        <ListItem>
          <Paper
            elevation={3}
            sx={{
              borderRadius: "25px",
              paddingLeft: "25px",
              paddingRight: "25px",
              width: "100%",
              ml: "1%",
              mr: "0px",
            }}
          >
            <h3>{props.text}</h3>
          </Paper>
          <ListItemIcon>
            <IconButton
              color="secondary"
              aria-label="more"
              id="long-button"
              aria-controls="long-menu"
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ transform: "rotate(-90deg)" }}
            >
              <ExpandMoreOutlinedIcon fontSize="large" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Box>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 0,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 10,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* {options.map((option) => (
       <MenuItem
         key={option}
         selected={option === "Pyxis"}
         onClick={handleClose}
       >
         {option}
       </MenuItem>
     ))} */}
        <MenuItem onClick={handleDeleteTask}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon style={{ color: "red" }} />
          </ListItemIcon>
          Delete task
        </MenuItem>
      </Menu>
    </>
  );
}
