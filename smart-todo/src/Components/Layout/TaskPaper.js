import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '80%',
          height: 'auto',
        },
      }}
    >
      <Paper elevation={3} sx={{ borderRadius: "2%",paddingLeft:'10px',paddingRight:'10px' }} >
         <h3>
            {props.text}
         </h3>
      </Paper>
    </Box>
  );
}