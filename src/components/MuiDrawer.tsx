import React, {useState} from 'react'
import{Drawer,IconButton, MenuItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const MuiDrawer = () => {
    const[isDrawerOpen,setIsDrawerOpen]=useState(false)
  return (
    <><IconButton>
          <MenuIcon />
      </IconButton><Drawer anchor='left'
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}>
          </Drawer></>
  )}
