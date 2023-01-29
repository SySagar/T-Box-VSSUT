import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ImageCard from './ImageCard';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Typography } from '@mui/material';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const openYT= async () => {

    window.open("https://www.youtube.com/", "_blank")

}

const openGithub= async () => {

    const github = localStorage.getItem('Github');
    if(github==null)
    github=""
    window.open('https://github.com/'+github, "_blank")

}

const openTwitter= async () => {

    const twitter = localStorage.getItem('Twitter');
    if(twitter==null)
    twitter=""
    window.open('https://twitter.com/'+twitter, "_blank")

}

export default function MGrid2() {
    return (


     

        <div className="box2">
            <div className="Youtube">
            <div className="links_style">
            <IconButton className='ytbtn' onClick={(e) => openYT()}>
                <YouTubeIcon />
            </IconButton>
            </div>
            </div >
          
            
            <div className="Twitter">
            <div className="links_style">
                <IconButton  className='ttbtn' onClick={(e) => openTwitter()}>
                    <TwitterIcon />
                </IconButton>
                </div>
            </div>
            
            <div className="Github" onClick={(e) => openGithub()}>
            <div className="links_style">
            <IconButton  className='gtbtn'>
                <GitHubIcon />
            </IconButton>
            </div>
            </div>
        </div>

    );
}