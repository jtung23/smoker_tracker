import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const LoginDialog = props => 
    <div>
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            {props.loginValidation ? 
                <DialogContentText style={{marginLeft: '24px', marginRight: '24px'}}>
                    Login Failed, please try again
                </DialogContentText> : null
            }
            <DialogContent>
                <TextField
                    autoFocus
                    onChange={props.handleFormChange}
                    name="email"
                    value={props.email}
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    onChange={props.handleFormChange}
                    name="password"
                    value={props.password}
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={props.handleClose} value={"login"} color="primary">
                    Login
                </Button>
            </DialogActions>
        </Dialog>       
    </div>

export default LoginDialog