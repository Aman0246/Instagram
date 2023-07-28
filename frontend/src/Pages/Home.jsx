import React from 'react'
import Box from '@mui/material/Box';
import Sidebar from '../Components/Sidebar/Sidebar';
import Rightbar from '../Components/Rightbar/Rightbar';
import styled from '@emotion/styled';
export default function Home() {
      return (
        <Box>
            <Box sx={{display:'flex'}} >
                <Box sx={{flex:0.3,marginRight:'1rem'}}>
                    <Sidebar />

                </Box>
                <Box sx={{flex:1}}>
                    <Rightbar />

                </Box>
            </Box>

        </Box>
    )
}
