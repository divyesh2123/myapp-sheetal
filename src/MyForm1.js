import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MyForm1(props) {

    const [form,setform] = React.useState({
        firstName : '',
        lastName : ''
    })

    const handleChange = (e)=>{

      setform({...form,[e.target.name] : e.target.value})

    }

    const handleSave= ()=>{
        let d= [...props.data];
        d.push({...form,id:d.length+1 });
        props.setData(d)
        props.handleClose();

    }
  return (
    <Dialog
    open={props.open}
    onClose={props.handleClose}
  
  >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="first Name"
        type="text"
        fullWidth
        variant="standard"
      onChange={handleChange}

      />

<TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        fullWidth
        variant="standard"

        onChange={handleChange}

      />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose}>Cancel</Button>
      <Button type="button" onClick={handleSave}>save</Button>
    </DialogActions>
  </Dialog>
  )
}
