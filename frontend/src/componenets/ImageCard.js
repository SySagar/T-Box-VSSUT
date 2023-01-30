import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState } from 'react';
export default function ImageCard({clubName, clubImage}) {

  const openSite = (clubName)=>{
    if(clubName==="Confession")
    window.open('https://confesso-0paf.onrender.com/', '_blank');
    if(clubName==="pokemon")
    window.open('https://pokemon-ar.netlify.app/', '_blank');
    if(clubName==="Ninja")
    window.open('https://sambit32.itch.io/ninja-frog', '_blank');
  }

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  return (
    <Card 
        
    elevation={2}
    onClick={e=>{openSite(clubName)}}
    className="mImageCard"
    sx={{ maxWidth: 85, maxHeight: 85 , margin:1 , borderRadius:3 ,
       borderBlockWidth:0  ,
       borderColor:'#929094' , 
    ':hover': {borderColor:'#f5f5f5',
      raised:true,
      zoom:true,
      boxShadow: 10, // theme.shadows[20]
    },}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={85}
          image={clubImage}
          alt="casual image"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h6"  color="black" fontFamily="Chakra Petch">
            {clubName}
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}