import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ImageCard({clubName, clubImage}) {


  return (
    <Card 
    elevation={2}
    className="mImageCard"
    sx={{ maxWidth: 85, maxHeight: 85 , margin:1 , borderRadius:3 , borderBlockWidth:0  , borderColor:'#929094'}}>
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