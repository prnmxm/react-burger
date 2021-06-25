import styles from './profileNav.module.scss'
import { NavLink } from "react-router-dom";
export default function ProfileNav () {
    return (
    <ul className={styles.container}>
        <li>
            <NavLink to="/profile" className={`text text_type_main-default text_color_inactive ${styles.link}`} activeClassName={styles.active} exact={true}>Профиль</NavLink>
        </li>
        <li>
            <NavLink to="/profile/orders" className={`text text_type_main-default text_color_inactive ${styles.link}`} activeClassName={styles.active} exact={true}>История заказов</NavLink>
        </li>
        <li>
            <NavLink to="/" className={`text text_type_main-default text_color_inactive ${styles.link}`} activeClassName={styles.active} exact={true}>Выход</NavLink>
        </li>
    </ul>
    )
}