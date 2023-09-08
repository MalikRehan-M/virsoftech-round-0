import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [serial, setSerial] = useState(1); 

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { task: taskInput, serial: serial }]);
      setTaskInput('');
      setSerial(serial + 1); 
    }
  };

  const removeTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Typography variant="h4" mt={20}>
        Todo List
      </Typography>
      <br />
      <div className="task-input">
        <TextField
          label="Add a task"
          variant="outlined"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={addTask}
          color="primary"
          sx={{ ml: 2, width: "100px", height: "50px" }}
        >
          Add
        </Button>
      </div>
      <br />
      <div className="task-list" style={{ width: "40%", margin: "auto" }}>
        {tasks.length === 0 ? (
          <Typography variant="h5">No tasks added yet!</Typography>
        ) : (
          <List sx={{ fontSize: "20px" }}>
            {tasks.map((task, index) => (
              <ListItem key={index} >
                <ListItemText
                  primary={<Typography variant="h6" >{task.serial}. {task.task}</Typography>}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeTask(task.task)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
}

export default Todo;
