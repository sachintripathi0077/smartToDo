import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";

export default function InputBar(props) {
  const [inputBarState, setInputBarState] = useState("");

  useEffect(() => {
    console.log("inputBarState: ", inputBarState);
    inputBarState.trim() && props.setCDIState(inputBarState);
  }, [inputBarState]);

  const handleChange = () => {
    console.log("change happended.");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setInputBarState(event.target.value);
      document.getElementById('fullWidth').value=''
    }
  };

  const handleAddOnClick = () => {
    setInputBarState(document.getElementById("fullWidth").value);
    document.getElementById('fullWidth').value=''
  };

  

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "100%",
      }}
    >
      <Toolbar />
      <ListItem>
        <TextField
          fullWidth
          label="Add a task"
          id="fullWidth"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <ListItemIcon>
          <IconButton color="primary" onClick={handleAddOnClick}>
            <AddIcon
              color="primary"
              fontSize="large"
              sx={{ marginLeft: "5px" }}
            />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </Box>
  );
}
