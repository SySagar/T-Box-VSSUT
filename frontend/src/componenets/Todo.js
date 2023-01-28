import React, { useState } from "react";
import { IconButton } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import "../App.css";
import ClearIcon from '@mui/icons-material/Clear';
import ListTasks from "../Todos/ListTasks";
import InputTask from "../Todos/InputTask";
import Storage from './Storage'

import InnerHTML from 'dangerously-set-html-content'

export default function Todo() {
  const [modal, setModal] = useState(false);

  const [tasks, setTask] = useState({ tasks: [] });

  const addTasks = (task) => {
    let tempTasks = tasks["tasks"];
    task = { id: tempTasks.length + 1, text: task, strike: false };
    tempTasks.push(task);
    setTask({ tasks: tempTasks });

    Storage(task);
  };

  const removeTasks = (taskid) => {
    let tempTasks = tasks["tasks"];
    let result = [];
    for (let i = 0; i < tempTasks.length; i++) {
      console.log(tempTasks[i].id, taskid);
      if (tempTasks[i].id !== +taskid) {
        result.push(tempTasks[i]);
      }
    }
    setTask({ tasks: result });
  };

  const strikeTask = (taskid) => {
    let tempTasks = tasks["tasks"];
    let result = [];
    for (let i = 0; i < tempTasks.length; i++) {
      if (tempTasks[i].id === +taskid) {
        tempTasks[i].strike = true
      }
      result.push(tempTasks[i]);
    }
    setTask({ tasks: result });
  };

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
  
      <script src="./script.js"></script>
  </body>
  
  </html>`;


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
        <IconButton onClick={toggleModal} style={{ color: "red" }} aria-label="delete">
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




// import "./App.css";
// import ListTasks from "./ListTasks";
// import InputTask from "./InputTask";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [tasks, setTask] = useState({ tasks: [] });

//   const addTasks = (task) => {
//     let tempTasks = tasks["tasks"];
//     task = { id: tempTasks.length + 1, text: task, strike: false};
//     tempTasks.push(task);
//     setTask({ tasks: tempTasks });
//   };

//   const removeTasks = (taskid) => {
//     let tempTasks = tasks["tasks"];
//     let result = [];
//     for (let i = 0; i < tempTasks.length; i++) {
//       console.log(tempTasks[i].id, taskid);
//       if (tempTasks[i].id !== +taskid) {
//         result.push(tempTasks[i]);
//       }
//     }
//     setTask({ tasks: result });
//   };

//   const strikeTask = (taskid) => {
//     let tempTasks = tasks["tasks"];
//     let result = [];
//     for (let i = 0; i < tempTasks.length; i++) {
//       if (tempTasks[i].id === +taskid) {
//         tempTasks[i].strike = true
//       }
//       result.push(tempTasks[i]);
//     }
//     setTask({ tasks: result });
//   };

//   return (
//     <div className="App container text-center">
//       <InputTask addTaskCallback={addTasks} />
//       <ListTasks tasksList={tasks["tasks"]} removeTaskCallback={removeTasks} strikeTaskCallback={strikeTask}/>
//     </div>
//   );
// }

// export default App;
