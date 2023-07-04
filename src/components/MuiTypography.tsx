import React from 'react'
import { Typography,Stack,Button,IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function MuiTypography() {
  return (
    <div>
        <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
        {/* <Typography variant ='h1'>Heading</Typography>
        <Typography variant ='subtitle1'>Hello</Typography>
        <Typography variant ='subtitle2'>Hey</Typography>
        <Typography variant ='body1'>Hi my name is shruti</Typography>
        <Typography variant ='body2'>hi my name is shruti</Typography> */}
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='success'>Success</Button>
        <Button variant='contained' color='error'>Error</Button>
        {/* <Button variant='text' color='secondary'>Text button</Button>
        <Button variant='outlined' color='warning'>Outlined button</Button> */}
        </Stack>
        </Stack><br></br>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small button</Button>
            <Button variant='contained' size='medium'>Medium button</Button>
            <Button variant='contained' size='large'>Large button</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />}>Send</Button> 
        </Stack>
        <IconButton aria-label='send' color='secondary'>
            <SendIcon />
        </IconButton>
    </div>
  )
}

export default MuiTypography;