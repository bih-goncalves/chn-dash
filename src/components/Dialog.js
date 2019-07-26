import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import './Dialog.css';
import new_c from '../assets/light/new_col.svg';
import twitter from '../assets/twitter.svg';
import media from '../assets/satellite.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
        <Button onClick={handleClickOpen}>
            <img className="btn" src={new_c} alt="Create new collection"/>
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Create a Collection  "}
            <Button onClick={handleClose} color="primary">X</Button>
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                <p>Collection Source* (See data from Twitter or News Media)</p>
                <p>
                <button className="btn-sel" ><img src={twitter} alt="Type" /> Twitter</button>
                <button className="btn-sel" ><img src={media} alt="Type" /> Media</button>
                </p>
                <p>
                    Date range* (max 31 Days)
                    <br></br>
                    <input type="text" />
                    <input type="text" />
                </p>

                <p>
                    Keyword or phrase* (max 3)
                    <br></br>
                    <input type="text" />
                </p>



            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Create Collection
            </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}