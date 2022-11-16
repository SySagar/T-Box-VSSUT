import React from 'react';
import './App.css';
import { format } from 'date-fns'
import { IconButton, Typography } from '@mui/material';
import moment from 'moment';
import cat from './animations/cat.json'
import panda from './animations/panda.json'
import Lottie from "lottie-react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from './componenets/Card'
import Grid from './componenets/Grid'
// import { makeStyles } from '@mui/styles'

export default function glassmorphism() {

  const handleSubmit = (e) => {

    e.preventDefault();

  };



  const time = moment().format("HH:mm");

  // const useStyles = makeStyles({
  //   google: {
  //     fontFamily:'Quicksand',
  //     fontSize:50,
  //     color:white,
  //   }
  // })

  // const classes =useStyles(note);

  return (
    <div className="glassmorphism">

      <div className="App">

        <div className="todos-container">
          <form className="form" onSubmit={handleSubmit}>

            <div className="cat">
              <Lottie animationData={cat}></Lottie>
            </div>

            <div className="mcard">
              <Card />
              
              
            </div>

            <Typography
              variant='h1'
              marginLeft={15}
              fontFamily='Cinzel'
              fontSize={120}
              align = 'left'
            >
              {time}
            </Typography>

            <Typography
              variant='h5'
              marginLeft={15}
              align = 'left'
            >
              {format(new Date(), 'do MMMM Y')}
            </Typography>

            <div className="panda">
              <Lottie animationData={panda}></Lottie>
            </div>

           

            <div className="item-group">

              <Typography className='mlabel'
                variant="body2"
                color="white"
                 fontSize={60}
                marginLeft={20}
                align = 'left'
                
                fontFamily={'Quicksand'} >
                Google
              </Typography>

              <div className="clubs">
              <Grid/>
            </div>

              <div className="item-group2">

                <input type="text"

                  id="Google"
                  placeholder="Search something..."
                  name="Google"

                  required />

                <IconButton type="submit"
                  className="form-submit-btn">
                  <SearchOutlinedIcon />
                </IconButton>

              </div>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}
