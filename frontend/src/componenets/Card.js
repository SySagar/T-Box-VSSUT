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

        fetch('https://t-box-backend.onrender.com/get-blog', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            setContent(data);
            console.log(data.title);
            console.log(data.snippet);
        })
    }, [])

    const onRefresh = async () => {

        fetch('https://t-box-backend.onrender.com/get-blog', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {
            setContent(data);
            console.log(data.title);
            console.log(data.snippet);
        })

    }

    return (
        <Card elevation={4}>
             <div className="mcard">
            
                
                <div className="headline">
                    <CardHeader
                        title='Tip of the day!'
                    >
                        <Typography variant="body2" color="white">

                            {content && content.title}
                        </Typography>
                    </CardHeader>
                </div>

                <div className="supporting-text">
                    <CardContent>

                        <div className="content">
                            <Typography variant="body1" color="white">
                                {content && content.snippet}
                            </Typography>
                        </div>

                        

                    </CardContent>

                        <div className="refresh">
                        <IconButton  onClick={(e) => onRefresh()}>
                                <RefreshIcon />
                            </IconButton>
                        </div>
                        
                </div>

                </div>
         </Card>
        
    )
}