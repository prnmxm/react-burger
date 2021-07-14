import {
  Logo, BurgerIcon, ListIcon, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './app-header.module.scss';
import {NavLink} from 'react-router-dom'

function AppHeader() {
  
  return (
    <header className={style.header}>
      <div className={style.container}>
        <ul className={style.menu}>
          <li className={style.item}>
            <NavLink to="/" className={`text text_type_main-default pb-1 pt-1 ${style.button}`} activeClassName={style.active} exact={true}>
              <BurgerIcon type="secondary" />
              Конструктор
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to="/feed" className={`text text_type_main-default pb-1 pt-1 ${style.button}`} activeClassName={style.active}>
              <ListIcon type="secondary" />
              Лента заказов
            </NavLink>
          </li>
        </ul>
        <NavLink to="/" className={style.logo}><Logo /></NavLink>
        <NavLink to="/profile" className={`pb-1 pt-1 text text_type_main-default ${style.button}`} activeClassName={style.active}>
          <ProfileIcon type="secondary" />
          Личный кабинет
        </NavLink>
      </div>
    </header>
  );
}

export default AppHeader;
