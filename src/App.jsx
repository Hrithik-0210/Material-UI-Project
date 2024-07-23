// import { useState } from 'react'
import { Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import { AddShoppingCart, AlarmAdd } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function App() {
  return (
    <>
      <div>
        <h3>Buttons</h3>
        <Button variant="text">Click</Button>
        <Button variant="contained" sx={{ margin: 2 }}>
          Click
        </Button>
        <Button variant="outlined" color="secondary">
          Click
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div>
        <h3>IconButton</h3>
        <IconButton aria-label="delet">
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary">
          <AddShoppingCart />
        </IconButton>
        <IconButton color="secondary">
          <AlarmAdd />
        </IconButton>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
        </Button>
      </div>
    </>
  );
}

export default App;
