import React from 'react'
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function MCard() {

    const [content, setContent] = useState()
    useEffect(() => {

        fetch('https://confesso.onrender.com/post', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            setContent(data);
            console.log(data);
        })
    }, [])

    const onRefresh = async () => {

        fetch('https://confesso.onrender.com/post', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            setContent(data);
           
        })

    }

    return (
        <Card elevation={4} >
             <div className="mcard">
            
                
                <div className="headline">
                    <CardHeader 
                        title= {content && content.title}
                    >
                        
                    </CardHeader>
                </div>

                <div className="supporting-text">
                    <CardContent sx={{ my: -8 }}>

                        <div className="content">
                            <Typography variant="body1" color="white">
                                {content  && content.content}
                            </Typography>
                        </div>

                        

                    </CardContent>

                        <div className="refresh">
                        <IconButton   onClick={(e) => onRefresh()}>
                                <RefreshIcon />
                            </IconButton>
                        </div>
                        
                </div>

                </div>
         </Card>
        
    )
}