import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Suggestion() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '70%', justifyContent: 'space-between',marginY:"5px",borderBottom:'1px solid #302c2c' }}>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>

        <img style={{ height: '2rem', width: '2rem', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU" alt="Dp" />
        <Box>
            <Typography>Aman Kashyap</Typography>
            <Typography sx={{ fontSize: '13px',color:"#8a8a8a" }}>Follow You</Typography>
        </Box>
    </Box>
    <Box>
        <Button style={{ textTransform: 'none' }}>Follow</Button>
    </Box>


</Box>
  )
}
