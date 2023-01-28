import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Sidebar = (props: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100',
        height: props.fullHeight
      }}
    >
      {/* <CircularProgress> */}
    </Box>
  )
}

export default Sidebar
