import styles from './profileNav.module.scss'
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../services/actions/user'
import { SyntheticEvent } from 'react';
export default function ProfileNav () {
    const dispatch = useDispatch();
    const logout = (e:SyntheticEvent) => {
        e.preventDefault()
        dispatch(logoutUser());
      };
    return (
    <ul className={styles.container}>
        <li>
            <NavLink to="/profile" className={`text text_type_main-default text_color_inactive ${styles.link}`} activeClassName={styles.active} exact={true}>Профиль</NavLink>
        </li>
        <li>
            <NavLink to="/profile/orders" className={`text text_type_main-default text_color_inactive ${styles.link}`} activeClassName={styles.active} exact={true}>История заказов</NavLink>
        </li>
        <li>
            <a onClick={logout} className={`text text_type_main-default text_color_inactive ${styles.link}`} style={{cursor:'pointer'}}>Выход</a>
        </li>
    </ul>
    )
}