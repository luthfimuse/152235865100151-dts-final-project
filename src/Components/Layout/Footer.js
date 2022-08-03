import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <Box sx={{
        height: 130,
        backgroundColor: 'black'
      }}>
      <BottomNavigation
      sx={{ pt:1, pb:2 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <BottomNavigationAction label="" icon={<FastfoodIcon />}/>
        <BottomNavigationAction label="" icon={<RamenDiningIcon />} />
        <BottomNavigationAction label="" icon={<DinnerDiningIcon />} />
        <BottomNavigationAction label="" icon={<EmojiFoodBeverageIcon />} />

      
      </BottomNavigation>
      <Typography variant="caption" display="block" gutterBottom sx={{ textAlign: 'center', color:'white',pt:1 }}>
        52235865100-151 | Luthfi Burhanuddin <br></br>
          <b> ResepMasakanKu </b> | Copyright@2022
      </Typography>
      
    </Box>
    </Paper>
    
  );
}
