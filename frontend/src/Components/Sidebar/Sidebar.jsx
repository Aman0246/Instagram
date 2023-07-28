import { Box } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Instagram from "./Instagram.png"

export default function Sidebar() {
    return (
        <Box sx={{justifyContent:'space-between', background: "black",display:'flex', overflow: 'hidden',flexDirection:'column', position: 'fixed',gap:5, width: '23.2%', height: '100vh',color:'white',alignItems:'left',paddingLeft:'10px',paddingTop:"20px",display:'flex' }}>
              <Box sx={{display:'flex',flexDirection:'column',gap:5}}>
              <Box>
               <img src={Instagram} alt="Instagram Logo" />
              </Box>
              <Box sx={{display:'flex',flexDirection:'column',gap:3}}>

            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
                <HomeIcon sx={{ color: "white" }} />
                <ul >
                    <li style={{ listStyle: 'none' }}>
                        Home
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <SearchIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Search
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <ExploreOutlinedIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Explore
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <MovieOutlinedIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Reels
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <MailOutlineOutlinedIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Message
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <MarkChatUnreadOutlinedIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Notification
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <AddBoxOutlinedIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Create
                    </li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex',cursor:'pointer',alignItems:'center',textAlign:'center',gap:2 }}>
            <AccountCircleIcon sx={{ color: "white" }} />
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        Profile
                    </li>
                </ul>
            </Box>
              </Box>
              </Box>
              <Box sx={{cursor:'pointer',marginBottom:'30px',display:'flex',alignItems:'center',gap:2}}><MenuIcon />More</Box>
        </Box>
    )
}
