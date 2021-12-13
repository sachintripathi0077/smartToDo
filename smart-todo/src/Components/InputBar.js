import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

export default function InputBar() {
    const handleChange = ()=>{
        console.log("change happended.")
    }
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '100%',
        
      }}
    >
        <Toolbar/>
      <TextField fullWidth label="Add a task" id="fullWidth" onChange={handleChange}/>
    </Box>
  );
}