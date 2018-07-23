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
                <DialogContentText>
                    Name
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="name"
                    fullWidth
                />
                <DialogContentText>
                    Email
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <DialogContentText>
                    Password
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.handleClose} color="primary">
                    Register
                </Button>
            </DialogActions>
        </Dialog> 
    </div>

export default RegisterDialog