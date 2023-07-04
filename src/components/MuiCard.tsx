import React from 'react'
import{Card , Box , CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
   <Box width='300px'>
    <Card>
        <CardMedia 
        component='img'
        height='140px'
        image='https://source.unsplash.com/random'
        alt='unsplash image'/>
      <CardContent>
        <Typography variant='h5'>React</Typography>
        <Typography variant='body2'>React is Js library used for building user interfaces.</Typography>
     
      </CardContent>
      <CardActions>  
         <Button size='small' variant='contained' color='secondary'>Share</Button>
         <Button size='small' variant='contained' color='secondary'>Learn more</Button>
     
      </CardActions>
    </Card>
   
   </Box>
  )
}
