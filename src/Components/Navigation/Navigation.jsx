import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import stiles from './Navigation.module.css';
const Navigation = () => {
  const authSelector = useSelector(state => state.user.token);
  return (
    <div className={stiles.container}>
      {authSelector ? (
        <NavLink
          exact
          to={routes.contacts}
          className={stiles.link}
          activeClassName={stiles.link_active}
        >
          Contacts
        </NavLink>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navigation;
