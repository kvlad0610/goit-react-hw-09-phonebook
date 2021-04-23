import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import stiles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={stiles.user}>
      <NavLink
        to={routes.login}
        className={stiles.link}
        activeClassName={stiles.link_active}
      >
        Log in
      </NavLink>
      <NavLink
        to={routes.register}
        className={stiles.link}
        activeClassName={stiles.link_active}
      >
        Register
      </NavLink>
    </div>
  );
};

export default UserMenu;
