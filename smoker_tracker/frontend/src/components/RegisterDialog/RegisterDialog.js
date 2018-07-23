import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const RegisterDialog = props => 
    <div>
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    onChange={props.handleFormChange}
                    margin="dense"
                    id="name"
                    name="name"
                    value={props.name}
                    label="Name"
                    type="name"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    onChange={props.handleFormChange}
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField
                    onChange={props.handleFormChange}
                    name="password"
                    value={props.password}
                    id="name"
                    label="Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.handleClose} value="register" color="primary">
                    Register
                </Button>
            </DialogActions>
        </Dialog> 
    </div>

export default RegisterDialog