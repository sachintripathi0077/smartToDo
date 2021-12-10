import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
      >
        <Toolbar>  
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          <Link to='/' style={{textDecoration:'inherit',color:'inherit'}}>       
            SmartDo
          </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
