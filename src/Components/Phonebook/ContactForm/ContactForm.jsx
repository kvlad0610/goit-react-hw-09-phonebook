import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../reducer/contacts/api';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { form, button } from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  function handleChange(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  }

  function addCont() {
    if (name !== '' && number !== '') {
      return dispatch(addContact(name, number));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addCont();
    setName('');
    setNumber('');
  }

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <form
        className={(classes.root, form)}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Number"
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />{' '}
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          className={(classes.button, button)}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </div>
  );
}
