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

    <div className="box" >
        <div className="Confession">
            <ImageCard clubName={"Confession"} clubImage={"/confession.png"}/>
        </div>

        <div className="pokemon">
        <ImageCard clubName={"pokemon"} clubImage={"/pikachu.png"}/>
        </div>

        <div className="Frog Ninja">
        <ImageCard clubName={"Ninja"} clubImage={"/frogy.png"}/>
        </div>
    </div>
    
  );
}