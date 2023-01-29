import React, { useState } from "react";
import { IconButton } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import "../App.css";

import InnerHTML from 'dangerously-set-html-content'

export default function Todo() {
  const [modal, setModal] = useState(false);

  const data = `<!DOCTYPE html>
  <html lang="pt-br">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://kit.fontawesome.com/1ab94d0eba.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" type="text/css" href="./style.css" />
  
      <title>TODO-LIST</title>
  
  </head>
  
  <body>
      <div id="container">
          <h1>TODO - LIST</h1>
          <div id="box">
              <input type="text" id="todo-input" name="todo" required placeholder="Add something..." autofocus>
              <button type="button" id="btn-add"><i class="fas fa-plus"></i></button>
              <button type="button" id="btn-del"><i class="fas fa-trash"></i></button>
          </div>
          <hr>
          <ul id="todo-list"></ul>
      </div>
  
      <script src="./Script.js"></script>
  </body>
  
  </html>
 `;


  const toggleModal = () => {
    setModal(!modal);
  };

  console.log(modal)

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <button  className="btn-modal">
        Open
      </button> */}
      <div className="btn-modal">
        <IconButton onClick={toggleModal} style={{ color: "red" }}>
          <FormatListBulletedIcon />
        </IconButton>
      </div>



      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <InnerHTML html={data} />
          </div>
        </div>
      )}

    </>
  );
}


