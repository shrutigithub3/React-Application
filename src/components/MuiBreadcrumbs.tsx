import React from 'react'
import{Box,Breadcrumbs,Link,Typography} from '@mui/material'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' separator='-'>
        <Link href='#' underline='none'>Home</Link>
        <Link href='#' underline='none'>Catalog</Link>
        <Link href='#' underline='none'>Accessories</Link>
        
        </Breadcrumbs>
    </Box>
  )
}
