import React from 'react'
import{Grid , Box , Paper} from '@mui/material'
import { constants } from 'fs/promises'

 const MuiGrid =()=> {
  return (
    <Paper sx={{padding:'32px'}} elevation={4}>
    <Grid container id='grid' spacing={4}>
        <Grid item>
            <Box bgcolor='primary.light' p={2}>Item1</Box>
        </Grid>
        <Grid item>
            <Box bgcolor='primary.light' p={2}>Item2</Box>
        </Grid>
        <Grid item>
            <Box bgcolor='primary.light' p={2}>Item3</Box>
        </Grid>
    </Grid>
    </Paper>
  )
}
export default MuiGrid;
