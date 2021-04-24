import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ContactForm from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../../reducer/contacts/actions';
// import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import styles from './Modal.module.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.contacts.modal);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    return dispatch(modalAction(true));
    // setOpen(true);
  };

  const handleClose = () => {
    return dispatch(modalAction(false));
    // setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ContactForm />
      {/* <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
      {/* <button type="button" onClick={handleClose}>
        Close Modal
      </button> */}
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div className={styles.modal_container}>
      <ListItem
        autoFocus
        button
        onClick={handleOpen}
        className={styles.list_item}
      >
        <ListItemAvatar>
          <Avatar className={styles.avatar}>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add account" />
      </ListItem>
      {/* <button type="button" onClick={handleOpen}>
        Add contact
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
