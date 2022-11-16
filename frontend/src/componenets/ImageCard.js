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
    sx={{ maxWidth: 85, maxHeight: 95 , margin:1}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={50}
          image={clubImage}
          alt="casual image"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h6"  color="black" fontFamily="Chakra Petch">
            {clubName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}