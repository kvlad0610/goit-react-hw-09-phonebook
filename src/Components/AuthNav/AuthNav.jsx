import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../reducer/auth/operations';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.user.name);
  return (
    <div className={styles.container}>
      <p className={styles.name}>Welcome,{name}</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default AuthNav;
