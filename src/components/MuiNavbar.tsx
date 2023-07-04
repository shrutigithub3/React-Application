import {AppBar, Toolbar ,IconButton, Typography ,Stack,Button,Menu,MenuItem,Drawer} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuIcon from '@mui/icons-material/Menu'
import React, {useState} from 'react'

export const MuiNavbar = () => {
    const[isDrawerOpen,setIsDrawerOpen]=useState(false)
    const[anchorEl,setAnchorEl]=useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)
    const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl (event.currentTarget)

    }
    const handleClose=(event:React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl (null)
    }
  

  return (
    <>
    <AppBar position='static'>
              <Toolbar>
                  <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                      <LibraryBooksIcon />
                      <MenuIcon/>
                  </IconButton>
                  <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                      Books Store
                  </Typography>
                  <Stack direction='row' spacing={2}>
                      <Button color='inherit'>Features</Button>
                      <Button color='inherit'>Pricing</Button>
                      <Button color='inherit' id='resources-button' onClick={handleClick}
                          aria-control={open ? 'resources-menu' : undefined}
                          aria-haspop='true'
                          aria-expanded={open ? 'true' : undefined}
                          endIcon={<KeyboardArrowDownIcon />}

                      >Resources</Button>
                      <Button color='inherit'>About</Button>
                      <Button color='inherit'>Login</Button>
                  
                  </Stack>
                  <Stack direction='row' spacing={2}>
                  <Drawer anchor='right'
                       open={isDrawerOpen}
                       onClose={() => setIsDrawerOpen(false)}>
                        <Typography>More details</Typography>
                      </Drawer>
                  </Stack>
                 
                  <Menu id='resources-menu' anchorEl={anchorEl} open={open}
                      MenuListProps={{
                          'aria-labelledby': 'resources-button',
                      }}
                      onClose={handleClose}
                  >
                      <MenuItem>Comic</MenuItem>
                      <MenuItem>Mystery</MenuItem>
                      <MenuItem>History</MenuItem>
                      <MenuItem>Autobiography</MenuItem>
                      <MenuItem>Biography</MenuItem>
                      <MenuItem>Fantasy</MenuItem>
                  </Menu>
              </Toolbar>

          </AppBar></>
  )
}
