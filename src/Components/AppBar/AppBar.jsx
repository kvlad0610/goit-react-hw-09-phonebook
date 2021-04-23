import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
// import { authSelector } from '../../reducer/auth/selectors';
import styles from './AppBar.module.css';
const AppBar = () => {
  const authSelector = useSelector(state => state.user.token);
  return (
    <div className={styles.container}>
      <Navigation />
      {authSelector ? <AuthNav /> : <UserMenu />}
      {/* <UserMenu /> */}
    </div>
  );
};

export default AppBar;
