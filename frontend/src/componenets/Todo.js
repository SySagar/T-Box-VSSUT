import React, { useState } from "react";
import { IconButton } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import "../App.css";
import ListTasks from "../Todo/ListTasks";
import InputTask from "../Todo/InputTask";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Todo() {
  const [modal, setModal] = useState(false);

  const [tasks, setTask] = useState({ tasks: [] });

  const addTasks = (task) => {
    let tempTasks = tasks["tasks"];
    task = { id: tempTasks.length + 1, text: task, strike: false};
    tempTasks.push(task);
    setTask({ tasks: tempTasks });
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


  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {/* <button  className="btn-modal">
        Open
      </button> */}
      <IconButton class="btn-modal" onClick={toggleModal} style={{ color: "red" }} aria-label="delete">
  <FormatListBulletedIcon />
</IconButton>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <InputTask addTaskCallback={addTasks} />
      <ListTasks tasksList={tasks["tasks"]} removeTaskCallback={removeTasks} strikeTaskCallback={strikeTask}/>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
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
