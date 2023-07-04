import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Box,Button,Typography,IconButton} from '@mui/material'
import Shop2Icon from '@mui/icons-material/Shop2';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';


export const EndPage = () => {
    let navigate = useNavigate();
    const changeRoute=()=>{
      let path = '/Main/EndPage';
      navigate(path);
    }
  return (
    <Box className='mainclass'>
             <Typography variant='h2' className='maintypo'>Thankyou visit again!!</Typography>
            
    </Box>
  )
}