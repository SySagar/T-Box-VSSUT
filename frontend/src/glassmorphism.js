import React from 'react';
import './App.css';
import { format } from 'date-fns'
import { IconButton, Typography } from '@mui/material';
import moment from 'moment';
import cat from './animations/cat.json'
import Lottie from "lottie-react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from './componenets/Card'
import Grid from './componenets/Grid'
import Grid2 from './componenets/Grid2'
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
// import { makeStyles } from '@mui/styles'

export default function glassmorphism() {

  const handleSubmit = (e) => {

    e.preventDefault();

  };

  const SearchQuery = (e)=>{

    var newPageUrl = "https://www.google.com/search?q="+e

    window.open(newPageUrl, "_blank") 
    
  }


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

          <div className="circle"></div>
          <div className="circle2"></div>

          <div className="cat">
            <Lottie animationData={cat}></Lottie>
          </div>


          <form className="form" onSubmit={handleSubmit}>



            <div className="fullcontent">

              <div className="main">

                <div className="Header">

                  <div className="frame1" >

                    <div className="timeAndDate">
                      <Typography
                        variant='h2'
                        marginLeft={15}
                        fontFamily='Roboto'
                        alignContent='left'
                        color="white"

                      >
                        {time}
                      </Typography>

                      <Typography
                        variant='h5'
                        marginLeft={15}
                        align='left'
                        color="white"
                      >
                        {format(new Date(), 'do MMMM Y')}
                      </Typography>
                    </div>


                    <div >
                      <Card />
                    </div>

                  </div>

                  {/* <Typography className='mlabel'
                  variant="body2"
                 color="white"
                  fontSize={60}

                  alignContent="center"

                  fontFamily={'Quicksand'} >
                  Google
                  </Typography> */}


                  <div className="search-bar">

                    {/* <script async src="https://cse.google.com/cse.js?cx=23f11aef5a1c8419d">
                    </script>
                    <div class="gcse-search"></div> */}

                    <input type="text"
                      
                      id="Google"
                      placeholder="Search something..."
                      name="Google"

                      onKeyPress={event => {
                        if (event.key === 'Enter') {
                          SearchQuery(document.getElementById('Google').value)
                        }
                      }}

                      required />



                    {/* <IconButton type="submit"
                      className="form-submit-btn">
                      <SearchOutlinedIcon />
                    </IconButton> */}

                  </div>

                </div>

              </div>


              <div className="down-cards-layout">

                <div className="down-cards">
                  <div className="cheader">
                    <Typography
                      variant="h5"
                      fontFamily="Quicksand"
                      color="white">
                      Chill spots
                    </Typography>
                    <div className='setting'>

                      <IconButton onClick={(e) => { }}>
                        <SettingsTwoToneIcon />
                      </IconButton>
                    </div>
                  </div>

                  <div className="frame3">
                    <div className="links">

                      <Grid2 />
                    </div>
                  </div>


                </div>

                <div className="down-cards">
                  <div className="cheader">
                    <Typography
                      variant="h5"
                      fontFamily="Quicksand"
                      color="white">
                      Clubs and Socieities
                    </Typography>
                  </div>

                  <div className="frame3">
                    <div className="clubs">

                      <Grid />
                    </div>
                  </div>

                </div>


              </div>




            </div>




          </form>


        </div>


      </div>

    </div>
  );
}
