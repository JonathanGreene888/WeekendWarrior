import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './ContactUsForm.css';

const FormDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [budget, setBudget] = React.useState('');
    const [message, setMessage] = React.useState('');


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleBudgetChange = (e) => {
        setBudget(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitEmailForm = () => {
        // TODO: Submit Email Form
        axios.post('http://localhost:8000/sendEmail', { text: `${name} ${email} ${budget} ${message}` });
    }

    return (
        <div>
            <Button variant="contained" className='Button-color' onClick={handleClickOpen}>
                Contact Us
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Contact Us</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To start a conversation or request a quote enter your information below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        fullWidth
                        value={name}
                        onChange={handleNameChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="budget"
                        type="numbers"
                        fullWidth
                        value={budget}
                        onChange={handleBudgetChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="message"
                        type="message"
                        fullWidth
                        value={message}
                        onChange={handleMessageChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitEmailForm} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;
