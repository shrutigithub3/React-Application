import React from 'react'
import {Stack,Avatar,Tooltip,IconButton,Alert,CircularProgress} from '@mui/material'
import  DeleteIcon from '@mui/icons-material/Delete'

export const MuiAvatar = () => {
  return (
   <Stack spacing={4}>
    <CircularProgress/>
    <Stack direction='row' spacing={1}>
        <Avatar sx={{bgcolor:'primary.light'}}>BM</Avatar>
        <Avatar sx={{bgcolor:'success.light'}}>SK</Avatar>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9KKrmauOM4Y2mUBHOMElvhs8Ryus4WyLXw&usqp=CAU'></Avatar>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt6imeY7n77bHWIpwVhEMDfiMjhU9rZh1cA&usqp=CAU'>
        </Avatar>
        <Tooltip title='delete'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
        <Alert severity='error'>Error</Alert>
        <Alert variant='outlined'severity='error'>Error</Alert>
        <Alert variant='filled' severity='error'>Error</Alert>

    </Stack>
   </Stack>
  )
}
