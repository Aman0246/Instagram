import { Box, Button, Typography } from '@mui/material'
import React ,{useState} from 'react'
import Card from '@mui/material/Card';
import LinearScaleSharpIcon from '@mui/icons-material/LinearScaleSharp';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import Input from '@mui/joy/Input';
import CommentModel from './CommentModel';
import AddIcon from '@mui/icons-material/Add';


export default function Post() {
    const [DialogOpen,setDialogOpen]=useState(false)
    const [Hert,setHert]=useState(false)

    return (
        <Box sx={{ marginX: '3rem', background: '#191818',paddingY:'20px'}}>
            <CommentModel DialogOpen={DialogOpen} setDialogOpen={setDialogOpen} />
            <Card sx={{ color: 'white', background: 'black' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '10px', background: 'black' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU" alt="DP" style={{ borderRadius: '50%', width: '3rem', height: '3rem', paddingRight: '5px' }} />
                        </Box>
                        <Box sx={{ fontWeight: 600 }}>
                            Mark
                        </Box>
                    </Box>
                    <Box>
                        <LinearScaleSharpIcon />
                    </Box>
                </Box>
                <CardMedia sx={{ height:'30rem',width:'100%' }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU"
                    title="green iguana" />

                <Box>
                    <Box sx={{ display: 'flex', gap: 3, margin: '5px' }}><FavoriteBorderIcon onClick={()=>{setHert(!Hert)}} sx={{color:Hert?"red":"",cursor:'pointer'}} /><MapsUgcIcon onClick={()=>{setDialogOpen(true)}} sx={{cursor:'pointer'}}  /><SendIcon sx={{cursor:'pointer'}} /></Box>
                </Box>
                <Box sx={{ margin: '5px', paddingBottom:'1rem'}}>
                    <Typography sx={{fontWeight:600}}>125,546 views</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, maiores eos aperiam obcaecati labore corporis harum explicabo earum itaque nulla fugiat ad id, delectus cumque beatae laborum voluptatibus tempore, ex repudiandae. Laborum, odio quasi molestias quod quisquam voluptates natus distinctio illum, id saepe asperiores placeat sequi perspiciatis voluptatibus, sunt ab voluptate repellendus. Nisi quasi omnis tempora recusandae, voluptatem saepe ut beatae eius illum vitae nihil possimus. Quisquam ab, ut fugiat cumque similique eos est? Quae, unde quo. Libero, totam harum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis earum quis voluptatem dolore nihil dolorem corrupti eveniet praesentium reprehenderit quos voluptatibus, iure facilis modi molestiae nesciunt officiis ea consectetur sunt magnam, ex sapiente fugit ab voluptatum! Nam totam dolores distinctio fuga quas dicta, sequi sed dignissimos possimus minus itaque quos nihil soluta voluptates rem maiores, aliquid facilis sapiente veritatis. Neque, illum repudiandae. Harum minus rerum expedita pariatur aut. At nulla deleniti repellat qui reprehenderit ab vel quae, accusantium et explicabo.</Typography>
                    <Typography onClick={()=>{setDialogOpen(true)}} sx={{color:'#938d8d',cursor:'pointer',marginTop:'5px'}}>View all 3,250 comments</Typography>
                    <Typography></Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <AddIcon/>
                    <Typography sx={{width:'90%'}}><Input placeholder="Type in here…" variant="solid" /></Typography>
                    <Button>Post</Button>
                    </Box>
                
                </Box>

            </Card>
        </Box>
    )
}
