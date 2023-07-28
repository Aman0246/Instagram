import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Allcomments from './Allcomments';
import Input from '@mui/joy/Input';

export default function CommentModel({ DialogOpen, setDialogOpen }) {


    return (
        <Dialog PaperProps={{ sx: { width: '60rem', maxWidth: '800rem', height: '80vh', borderRadius: '10px'  } }} open={DialogOpen}>

            <Box sx={{ display: 'flex', height: '100%' }}>
                <Box onClick={() => setDialogOpen(false) } sx={{position:'absolute',zIndex:1, right: 1,color:'white',cursor:'pointer' }}><CloseIcon/></Box>
                <Box sx={{ flex: 2.5, background: 'black', overflowX: 'hidden', display: 'flex', paddingRight: '8px' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVsqSwtfTCLsvh1MTu5PTlS7wFVzNDIs_Uw&usqp=CAU" alt=""  />
                </Box>
                <Box sx={{ flex: 2, background: '#1a1919'}}>
                    <Box sx={{display:'flex',gap:2,marginBottom:2,position:'sticky',borderBottom:'1px solid white'}}>
                        <Box> <img style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVsqSwtfTCLsvh1MTu5PTlS7wFVzNDIs_Uw&usqp=CAU" alt=""  />  </Box>
                        <Box sx={{ color: 'white', width: '80%' }}>
                            <Typography sx={{ fontSize: '12px' }}>Aman kashyap</Typography>
                            <Typography sx={{ fontSize: '10px', color: '#8a8a8a' }}>Aman kashyap</Typography>
                        </Box>
                    </Box>
                    <Box sx={{overflowY:'scroll',height:'75%'}}>

                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments />
                    <Allcomments /> 
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3, margin: '5px',color:'white' }}><FavoriteBorderIcon /><AddIcon/></Box>
                    <Box sx={{display:'flex',gap:1}}>

                    <Typography sx={{width:'90%'}}><Input placeholder="Type in here…" variant="solid" /></Typography>
                    <Button>Post</Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}
