import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Allcomments() {
  return (
    <Box sx={{width:'100%',display:'flex',gap:2,paddingBottom:1,borderBottom:'1px solid #4c4a4a'}}>
         
    <Box>
            <img  style={{width:'2.5rem',height:'2.5rem',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVsqSwtfTCLsvh1MTu5PTlS7wFVzNDIs_Uw&usqp=CAU" alt=""  />
    </Box>

    <Box sx={{color:'white',width:'80%'}}>
        <Typography  sx={{ fontSize:'12px'}}>Aman kashyap</Typography>
        <Typography  sx={{ fontSize:'10px',color:'#8a8a8a'}}>Aman kashyap</Typography>
        <Typography  sx={{ fontSize:'10px',wordSpacing:5,marginTop:2}}>Aman kashsaddddddddddddap Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nemo? Deleniti laudantium laboriosam commodi hic ipsum, quia deserunt molestias sit!</Typography>
    </Box>
</Box>
  )
}
