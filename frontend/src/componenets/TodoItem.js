import { Box, Button, TextField } from '@mui/material'
import { Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react'

function TodoItem() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])
  const addTodo = (text) => {
    if(!text) return
    const newTodo = {
      id: Math.random().toString(),
      text,
      completed: false
    }
    setTodos(pre => [...pre, newTodo])
  }
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    if(!newTodos.length) localStorage.removeItem('todos')
  }
  useEffect(() => {
    if (!todos.length) return
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
  }, [todos])

  return (
    <div>
      <Box  sx={{ maxHeight: '50px',display:'flex',gap:2 }}>
        <TextField variant='outlined' sx={{height:'100%'}} onChange={(e) => setText(e.target.value)} label='add todos' />
        {/* <Button variant='contained' onClick={() => addTodo(text)}>Add </Button> */}
        <IconButton size='25s' aria-label="delete" onClick={() => addTodo(text)}>
                <AddIcon  />
              </IconButton>
      </Box>
      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id} >
            {todo.text}
            <Button variant='contained' onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </li>
          
        ))}
      </ul> */}

      <List aria-label="basic-list">
        {todos.map(todo => (

          <ListItem key={todo.id}>
            <Box  sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
              {todo.text}
              {/* <Button variant='contained' onClick={() => deleteTodo(todo.id)}>Delete</Button> */}
              <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default TodoItem