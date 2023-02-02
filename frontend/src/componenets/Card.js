import React from 'react'
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

export default function MCard() {

    const [content, setContent] = useState()
    useEffect(() => {

        fetch('https://confesso.onrender.com/post', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {

            
            if(!data)
            onRefresh()

            setContent(data);
            console.log(data);

            

        })
    }, [])

    const [tog, setToggle] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
          onRefresh()
          setToggle(!tog)
        }, 10000);
        return () => clearTimeout(timer);
      }, [tog]);
      

 

    const onRefresh = async () => {

        fetch('https://www.boredapi.com/api/activity', {
            method: 'GET'
        }).then(res => res.json()).then((data) => {

            if(!data)
            onRefresh()

            setContent(data);
           
        })

    }

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
  

  

    const packages = () =>{
        toggleModal()
    }

    return (
        <Card elevation={4} >
             <div className="mcard">
            
                
                <div className="headline">
                    <CardHeader 
                    
                        sx={{color:'#9494b8'}}
                        title= {content && "What to do today?"}
                    >
                        
                    </CardHeader>
                </div>

                <div className="supporting-text">
                    <CardContent sx={[{ marginBlock: -8 },{maxWidth:320}]}>

                        <div className="content">
                            <Typography variant="body1" color="white">
                                {content  && content.activity}
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


                {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content" >
              <h2 color='white'>Set up your links</h2>
              <br /><br />


            </div>

            
            
          </div>
        )}

         </Card>
        
    )
}