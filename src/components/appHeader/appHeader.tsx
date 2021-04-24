import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './appHeader.module.scss';

function AppHeader () {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <a href="#constructor" className={`text text_type_main-default ${style.button} ${style.active}`}>
                        <BurgerIcon type="primary" /> Конструктор</a>
                        </li>
                    <li className={style.item}>
                        <a href="#lenta" className={`text text_type_main-default ${style.button}`}>
                        <ListIcon type="secondary" /> Лента заказов</a>
                        </li>
                </ul>
                <Logo />
                <a href="#cabinet" className={`${style.button}`}>
                <ProfileIcon type="secondary" /> Личный кабинет</a>
            </div>
        </header>
    )
}

export default AppHeader;