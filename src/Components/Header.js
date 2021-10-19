import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { SettingsApplications } from '@material-ui/icons';
import { StarBorder } from '@material-ui/icons';
import './Header.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { db } from '../Firebase';

function Header({ user }) {

    const [Name, setname] = useState("")
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Add__channel = (e) => {
        e.preventDefault();
        if (Name) {
            db.collection("Channels").doc().set({
                name: Name
            })
        }
        handleClose()

    }

    return (
        <div className="header">
            <div className="header__left">
                <Avatar alt={user?.displayName} src={user?.photoURL} className="header__profile" />
                <AccessTimeIcon />
            </div>
            <div className="header__middle">
                <input type="search" placeholder="Search" />
                <SearchIcon className="search__icon" />
            </div>
            <div className="header__right">
                <HelpIcon className="header__right__icons" />
                <StarBorder className="header__right__icons" />
                <SettingsApplications className="header__right__icons" />
                <Button variant="outlined" className="Add__channel" onClick={handleClickOpen}>
                    Add a Channel
                </Button>
            </div>


            {/* Dialouge */}

            <div>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Channel</DialogTitle>
                    <form onSubmit={(e) => { Add__channel(e) }}>
                        <DialogContent>
                            <DialogContentText>
                                To add the channel just enter the name of the channel and click "Add"
                            </DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Channel Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                value={Name}
                                onChange={(e) => {
                                    setname(e.target.value)
                                }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit">Add</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </div>
    )
}

export default Header
