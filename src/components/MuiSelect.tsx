import React from 'react'
import {Box,MenuItem,TextField} from '@mui/material'
import { useState } from 'react'

const MuiSelect=()=> {
    const[country,setCountry]=useState('')
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value)
    }
  return (
    <Box width='250px'>
        <TextField label='select country' 
        select
        value={country}
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value='red'>RED</MenuItem>
        <MenuItem value='yellow'>YELLOW</MenuItem>
        <MenuItem value='purple'>PURPLE</MenuItem>

        </TextField>
    </Box>
  )
}
export default MuiSelect;
