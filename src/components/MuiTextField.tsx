import React from 'react'
import { InputAdornment, Stack,TextField} from '@mui/material'
export default function MuiTextField() {
  return (
    <div>
        <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label="Enter Name" variant='filled'></TextField>
            <TextField label="Enter Name" variant='outlined' color='secondary' size='small'></TextField>
            <TextField label="Enter Name" variant='standard'></TextField>
        </Stack>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label="Form Input" helperText="Do no share with anyone else" required></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amount'
            InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>,

            }}/>
            <TextField label='Weight'
            InputProps={{
                endAdornment:<InputAdornment position='end'>Kg</InputAdornment>,

            }}/>
            </Stack>
    </div>
  )
}
