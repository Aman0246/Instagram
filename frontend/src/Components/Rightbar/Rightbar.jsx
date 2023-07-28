import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Post from '../Post/CommentModel/Post'
import Suggestion from './Suggestion'

export default function Rightbar() {
    return (
        <Box sx={{ backgroundColor: '#191818', paddingTop: '2rem', paddingLeft: "11px", color: 'white', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flex: 3 }}>
                    <Post />
                    <Post />
                    <Post />
                </Box>

                <Box sx={{ flex: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '70%', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>

                            <img style={{ height: '2rem', width: '2rem', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU" alt="Dp" />
                            <Box>
                                <Typography>Aman Kashyap</Typography>
                                <Typography sx={{ fontSize: '13px',color:"#8a8a8a" }}>Aman Kashyap</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Button style={{ textTransform: 'none' }}>Switch</Button>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: 5 }}>
                        <Typography sx={{ paddingY: 2,color:"#8a8a8a" }}>Suggested For you</Typography>
                        <Suggestion/>
                        <Suggestion/>
                        <Suggestion/>
                        <Suggestion/>
                        <Suggestion/>
                        <Suggestion/>
                            {/* /////////////////////////////// */}
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
