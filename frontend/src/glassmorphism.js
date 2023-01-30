import React from 'react';
import './App.css';
import { useState } from "react";
import { format } from 'date-fns'
import { IconButton, Typography } from '@mui/material';
import moment from 'moment';
import cat from './animations/cat.json'
import Lottie from "lottie-react"
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from './componenets/Card'
import Grid2 from './componenets/Grid2'
import MGrid from './componenets/Grid';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import TodoMenu from './componenets/TodoMenu'
import Snackbar from './componenets/SimpleSnackbar';

export default function Glassmorphism() {



  const handleSubmit = (e) => {

    e.preventDefault();

  };

  const SearchQuery = (e) => {

    var newPageUrl = "https://www.google.com/search?q=" + e

    window.open(newPageUrl, "_blank")

  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");

  function handleChange1(event) {
    setTwitter(event.target.value);
  };

  function handleChange2(event) {
    setGithub(event.target.value);

  };

  const saveLinks = () => {

    if (github === "")
      localStorage.removeItem('Github')


    if (twitter === "")
      localStorage.removeItem('Twitter')

    localStorage.setItem('Github', github);
    localStorage.setItem('Twitter', twitter);

  }


  const SetLinks = () => {
    toggleModal()
    console.log("pressed");
  }


  const time = moment().format("HH:mm");


  return (
    <div className="glassmorphism">

     

      <div className="App">


        <div className="todos-container">

        <div className="enigma">
        <img src="enigma.jpeg" alt="" />
      </div>

          <div className="circle"></div>
          

          <div className="cat">
            <Lottie animationData={cat}></Lottie>
          </div>
          <div className="circle2"></div>


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



                  <div className="search-bar">

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



                  </div>

                </div>

              </div>


              <div className="down-cards-layout">

                <div className="down-cards">
                  <div className="cheader">
                    <Typography
                      variant="h5"
                      style={{ fontFamily: "Quicksand", color: "white" }}
                    >
                      Chill spots
                    </Typography>
                    <div className='setting'>

                      <IconButton className='stbtn' onClick={SetLinks}>
                        <SettingsTwoToneIcon sx={{ color: 'white' }} />
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
                      style={{ fontFamily: "Quicksand", color: "white" }}>
                      Our Projects
                    </Typography>
                  </div>

                  <div className="frame3">
                    <div className="clubs">

                      <MGrid />
                    </div>
                  </div>

                </div>

              </div>




            </div>




          </form>


        </div>

        


      </div>
      

      <div>


        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content" >
              <h2 color='white'>Set up your links</h2>
              <br /><br />
              <Stack direction='column' gap='30px' >
                <Typography variant='h6' position={'absolute'} top='90px' color={'white'}>
                  Twitter
                </Typography>
                <TextField onChange={handleChange1} value={twitter} id="outlined-basic" label="type your Twitter handle" variant="outlined" sx={{ background: 'white' }} />
                <br />
                <Typography variant='h6' position={'absolute'} left='30px' top='230px' color={'white'}>
                  Github
                </Typography>
                <TextField onChange={handleChange2} value={github} id="outlined-basic" label="type your Github handle" variant="outlined" sx={{ background: 'white' }} />
              </Stack>
              <br />
              <Snackbar onClick={saveLinks}></Snackbar>

              <br />
              


            </div>
            
          </div>
        )}

<div className="todo">
                  <TodoMenu />
                </div>

      </div>

     

    </div>
  );
}
