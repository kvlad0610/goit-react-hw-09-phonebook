// import { label, input } from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactAction } from '../../../reducer/contacts/actions';
import TextField from '@material-ui/core/TextField';

export default function Filter() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  function onChange(e) {
    return dispatch(filterContactAction(e.currentTarget.value));
  }

  return (
    <>
      {contacts.length > 0 && (
        // <label className={label}>
        //   Find contacts by name <br />
        //   <input className={input} type="text" onChange={onChange} />
        // </label>
        <TextField
          id="outlined-basic"
          label="Find contacts by name"
          variant="outlined"
          size="small"
          type="text"
          onChange={onChange}
        />
      )}
    </>
  );
}
