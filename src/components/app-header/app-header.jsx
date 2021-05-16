import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './app-header.module.scss';

function AppHeader () {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <a href="/" className={`text text_type_main-default pb-1 pt-1 ${style.button} ${style.active}`}>
                        <BurgerIcon type="primary" /> Конструктор</a>
                        </li>
                    <li className={style.item}>
                        <a href="/" className={`text text_type_main-default pb-1 pt-1 ${style.button}`}>
                        <ListIcon type="secondary" /> Лента заказов</a>
                        </li>
                </ul>
                <a href="/" className={style.logo}><Logo /></a>
                <a href="/" className={`pb-1 pt-1 text text_type_main-default ${style.button}`}>
                <ProfileIcon type="secondary" /> Личный кабинет</a>
            </div>
        </header>
    )
}

export default AppHeader;