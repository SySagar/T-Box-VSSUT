import React from 'react'
import { useEffect , useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function MCard() {

  const [content, setContent] = useState()
  useEffect(() => {
  
       fetch('https://t-box-backend.onrender.com/get-blog', {
      method: 'GET'
    }).then(res => res.json()).then((data) => {
        setContent(data) ;
        console.log(data.title);
        console.log(data.snippet);})
  },[])
  
  const onRefresh = async () => {
   
    fetch('https://t-box-backend.onrender.com/get-blog', {
        method: 'GET'
      }).then(res => res.json()).then((data) => {
          setContent(data) ;
          console.log(data.title);
          console.log(data.snippet);})
    
  }
   
    return (
        <div>
            <Card elevation={4}> 
                <CardHeader
            
                    action={
                        <IconButton onClick={(e)=>onRefresh()}>
                            <RefreshIcon />
                        </IconButton>
                    }
                    title='Tip of the day!'
                    >
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                       
                        {content  && content.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                       {content && content.snippet}
                   </Typography>
                </CardContent>
            </Card>
        </div>
    )
}