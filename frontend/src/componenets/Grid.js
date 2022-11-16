import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ImageCard from './ImageCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MGrid() {
  return (
    // <div className="box">
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={6} md={3}>
          
    //       <Paper>1</Paper>
          
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={3}>
          
    //       <Paper>1</Paper>
          
    //     </Grid>
       
    //   </Grid>
    //   </div>

    <div className="box">
        <div className="Enigma">
            <ImageCard clubName={"Enigma"} clubImage={"/enigma.jpeg"}/>
        </div>

        <div className="Robotics">
        <ImageCard clubName={"Robotics"} clubImage={"/robotics.png"}/>
        </div>

        <div className="IIC">
        <ImageCard clubName={"IIC"} clubImage={"/IIC.png"}/>
        </div>
    </div>
    
  );
}